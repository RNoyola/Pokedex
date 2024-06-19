import { useNavigation } from "@react-navigation/native"
import { View, TouchableOpacity, Image, StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const EvolutionChain = ({evolutions, pokemonName}) => {
  const navigation = useNavigation()

  if (evolutions?.length > 0) {
    const currentPokemonStyle = {
      borderColor: "red",
      borderRadius: 5,
      borderWidth: 1
    }
    return (
      <View style={styles.mainContainer}>
        {evolutions.map((element, index) => (
          <View key={`${element.name}_evolution_${index}`} style={styles.arrowDisplayView}>
            <TouchableOpacity
              style={pokemonName === element.name ? currentPokemonStyle : {}}
              onPress={() => navigation.navigate("PokemonDetail", { pokemonName: element.name})}
              testID="evolution-button"
            >
              <Image style={styles.imageStyle} source={{uri: element.asset}} testID="evolution-image"/>
            </TouchableOpacity>
            {evolutions?.length !== index + 1 ? <Icon style={styles.arrowOffset} name="arrow-forward" size={25} testID="evolution-icon" /> : null}
          </View>
        ))}
      </View>
    )
  }
  return (<></>)  
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  arrowDisplayView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  arrowOffset: {
    paddingTop: 15
  }
})

export default EvolutionChain