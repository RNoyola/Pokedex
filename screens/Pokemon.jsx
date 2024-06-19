import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { useGetEvolutionChainByIdQuery, useGetPokemonByNameQuery, useGetSpeciesByNameQuery } from "../services/pokemon"
import { useEffect, useState } from "react"

import EvolutionChain from "../components/EvolutionsChain"
import Stats from "../components/Stats"
import MainAbilities from "../components/MainAbilities"
import Types from "../components/Types"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch, useSelector } from "react-redux"
import { addCatch, deleteCatch } from "../store/slices/catchSlice"
import pokemonUtilities from "../utilities/pokemonUtilities"

const Pokemon = ({ route }) => {
  const { pokemonName } = route.params
  const [pokemonChainId, setPokemonChainId] = useState(undefined)
  const [evolutions, setEvolutions] = useState()
  // const [catched, setCatched] = useState(false)

  const { data: pokemonData, error: pokemonError, isLoading: pokemonIsLoading } = useGetPokemonByNameQuery(pokemonName)
  const { data: speciesData, error: speciesError, isLoading: speciesIsLoading } = useGetSpeciesByNameQuery(pokemonName)
  const { data: evolutionChainData, error: chainError, isLoading: isLoadingChain } = useGetEvolutionChainByIdQuery(pokemonChainId, { skip: !pokemonChainId })

  const catched = useSelector((state) => state.catch.catched)
  const dispatch = useDispatch()

  useEffect(() => {
    if(speciesData?.evolution_chain) {
      const id = speciesData.evolution_chain.url.split("https://pokeapi.co/api/v2/evolution-chain/")[1]
      setPokemonChainId(id)
    }
  }, [speciesData, setPokemonChainId])

  useEffect(() => {
    if (evolutionChainData && !isLoadingChain && !speciesIsLoading) {
      retrieveChain(evolutionChainData.chain)
    }
  }, [evolutionChainData])

  const pushEvolutionToArray = async (name, evolutionChain) => {
    let asset = ""
    if (name !== pokemonName) {
      try {
        let assetResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const jsonResponse =  await assetResponse.json()
        asset = jsonResponse.sprites.front_default
      } catch (e) {
        console.err("ERROR", e)
      }
    } else {
      asset = pokemonData.sprites.front_default
    }
    evolutionChain.push({
      name: name,
      asset: asset
    })
  }

  const retrieveChain = async (chain) => {
    let evolution = chain
    let evolutionChain = []
    do {
      let numberOfEvolutions = evolution.evolves_to.length
      await pushEvolutionToArray(evolution.species.name, evolutionChain)
      
      if (numberOfEvolutions > 1) {
        for(let i = 1; i < numberOfEvolutions; i++) {
          await pushEvolutionToArray(evolution.evolves_to[i].species.name, evolutionChain)
        }
      }

      evolution = evolution.evolves_to[0]
    } while (!!evolution )
    setEvolutions(evolutionChain)
  }

  const loading = () => (<Text>Loading...</Text>)  

  const handleData = () => {
    const asset = pokemonData.sprites.front_default
    const indexCatched = pokemonUtilities.isCatched(pokemonName, catched)
    return (
    <View style={styles.offsetScroll}>
      <View style={styles.pokemonOverView}>
        <Text style={styles.title}>{pokemonName.toUpperCase()}</Text>
        <View style={styles.groupImageCatch}>
          <Image source={{uri: asset}} style={styles.pokemonImage} resizeMode="contain" />
          <TouchableOpacity style={styles.catchedPokemonButton} onPress={() => {
            if (indexCatched !== -1) {
              dispatch(deleteCatch(indexCatched))
            } else {
              dispatch(addCatch(
                {
                  name: pokemonName,
                  asset: asset
                }
              ))
            }
          }}>
            <MaterialCommunity name="pokeball" size={30} color={indexCatched !== -1 ? "red" : "black"} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.typeView}>
          <Text>Type: </Text>
          <Types types={pokemonData.types}/>
        </View>
      </View>
      <View style={styles.mainAbilities}>
        <Text style={styles.abilitiesText}>Abilities: </Text>
        <MainAbilities mainAbilities={pokemonData.abilities}/>
      </View>
      <Stats stats={pokemonData.stats}/>
      <Text style={styles.evolutionChainText}>Evolution Chain:</Text>
      <EvolutionChain evolutions={evolutions} pokemonName={pokemonName} />
    </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.separator} />
      <ScrollView style={styles.detailView}>
        { pokemonIsLoading && !pokemonData ? loading() : handleData()}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#e11b2e"
  },
  separator: {
    marginTop: 30
  },
  detailView: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 16,
    padding: 10,
    marginBottom: 100,
    borderColor: "black",
    borderRadius: 6,
    borderWidth: 3,
    paddingBottom: 100
  },
  offsetScroll: {
    marginBottom: 50
  },
  pokemonOverView: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  pokemonImage: {
    width: 200,
    height: 200
  },
  typeView: {
    flexDirection: "row"
  },
  mainAbilities: {
    flexDirection: "column",
    marginTop: 15
  },
  abilitiesText: {
    marginBottom: 10
  },
  evolutionChainText: {
    marginTop: 20,
    marginBottom: 10
  },
  catchedPokemonButton: {
    justifyContent: "flex-end",
    marginLeft: -30,
    marginBottom: 10
  },
  groupImageCatch: {
    flexDirection: "row"
  }
})

export default Pokemon