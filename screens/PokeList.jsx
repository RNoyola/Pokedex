import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useGetPokemonByLimitQuery, useGetTypeByNameQuery } from '../services/pokemon'
import { useEffect, useState } from "react"
import Icon from "react-native-vector-icons/Ionicons"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import pokemonUtilities from "../utilities/pokemonUtilities"
import { useSelector } from "react-redux"
import { Dropdown } from "react-native-element-dropdown"

const Pokelist = ({ navigation }) => {
  const [pokeData, setPokeData] = useState([])
  const [pokeSearch, setPokeSearch] = useState("")
  const [filterValue, setFilterValue] = useState("none")
  const { data, error, isLoading } = useGetPokemonByLimitQuery()
  const { data: typeData, error: errorType, isLoading: isLoadingType } = useGetTypeByNameQuery(filterValue, { skip: (filterValue === "none" || filterValue === "catched")})
  const catched = useSelector((state) => state.catch.catched)

  useEffect(() => {
    if (data) {
      setPokeData(data.results)
    }
  }, [data, setPokeData])

  useEffect(() => {
    if (typeData) {
      setPokeData(typeData?.pokemon)
    }
  }, [typeData])

  useEffect( () => {
    if (pokeSearch !== "" && data) {
      const filterList = data.results.filter((element) => {
        return (element.name.search(pokeSearch.toLowerCase()) !== -1)
      })
      setPokeData(filterList)
    }
     else {
      if (data) setPokeData(data.results)
    }
  }, [pokeSearch, setPokeData])

  useEffect(() => {
    if (data) {
      switch(filterValue) {
        case "none":
          setPokeData(data.results)
          return
        case "catched":
          setPokeData(catched)
          return
        default: return
      }
    }
  }, [filterValue])
  
  const loading = () => (<Text>Loading...</Text>)

  const handleList = (item) => {
    const isCatched = pokemonUtilities.isCatched(item.item.name || item.item.pokemon.name, catched)

    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate("PokemonDetail", { pokemonName: item.item?.name || item.item.pokemon.name})}}>
        <MaterialCommunity name="pokeball" size={30} color={isCatched === -1 ? "black" : "red"} />
        <Text>{ (item.item?.name || item.item.pokemon.name).toUpperCase() }</Text>
        {isCatched !== -1 ? (<Image source={{uri: catched[isCatched].asset}} style={{ width: 30, height: 30}} resizeMode="contain"/>) : null}
      </TouchableOpacity>
    )
  }

  const pokeList = () => (
    <FlatList
        data={pokeData}
        renderItem={(item) => handleList(item)}
        keyExtractor={(item, index) => `${item?.name || item.pokemon.name}_${index}`}
    />
  )

  const dData = [
    { label: 'All', value: 'none' },
    { label: 'Catched', value: 'catched' },
    { label: 'Bug', value: 'bug' },
    { label: 'Dark', value: 'dark' },
    { label: 'Dragon', value: 'dragon' },
    { label: 'Electric', value: 'electric' },
    { label: 'Fairy', value: 'fairy' },
    { label: 'Fighting', value: 'fighting' },
    { label: 'Flying', value: 'flying' },
    { label: 'Fire', value: 'fire' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Grass', value: 'grass' },
    { label: 'Ground', value: 'ground' },
    { label: 'Ice', value: 'ice' },
    { label: 'Normal', value: 'normal' },
    { label: 'Poison', value: 'poison' },
    { label: 'Psychic', value: 'psychic' },
    { label: 'Steel', value: 'steel' },
    { label: 'Water', value: 'water' }
  ]

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.separator} />
      <View style={styles.viewContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputStyle}
            value={pokeSearch}
            onChangeText={setPokeSearch}
          />
          <Icon style={styles.iconStyle} name="search-sharp" size={30} />
        </View>
        <View style={{
          alignItems: "flex-end",
        }}>
          
          <Dropdown 
            data={dData}
            labelField="label"
            valueField="value"
            value={filterValue}
            style={{
              height: 30,
              width: "50%",
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 6,
              paddingHorizontal: 10,
              backgroundColor: "white",
              marginBottom: 20
            }}
            onChange={(item) => {
              setFilterValue(item.value)
            }}
          />
        </View>  
        <View style={styles.listContainer}>
          {
            isLoading && !pokeData ? loading() : pokeList()
          }
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#e11b2e"
  },
  separator: {
    marginTop: 30
  },
  viewContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6
  },
  inputStyle: {
    flex: 1,
    padding: 10
  },
  iconStyle: {
    justifyContent: "center",
    padding: 5
  },
  listContainer: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 150,
    borderColor: "black",
    borderRadius: 6,
    borderWidth: 3
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5

  }
})

export default Pokelist