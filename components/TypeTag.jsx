import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity } from "react-native"


const TypeTag = ({type, disable = false, style={}}) => {
  const navigation = useNavigation()

  const backgroundColor = () => {
    switch(type) {
      case "normal": return "#9e9e70"
      case "fire": return "#f67435"
      case "water": return "#5a86e9"
      case "electric": return "#fac941"
      case "grass": return "#5fc152"
      case "ice": return "#85d3d2"
      case "fighting": return "#c12928"
      case "poison": return "#9d3892"
      case "ground": return "#deb765"
      case "flying": return "#a286e9"
      case "psychic": return "#ff4c7c"
      case "bug": return "#98af33"
      case "rock": return "#b1953c"
      case "ghost": return "#684e8a"
      case "dragon": return "#6c34f0"
      case "dark": return "#674e40"
      case "steel": return "#b0afc8"
      case "fairy": return "#f3adb4"
      default: return "white"
    }
  }

  return (
    <TouchableOpacity disabled={disable} onPress={() => navigation.navigate("TypeModal", { type: type})} style={[{backgroundColor: backgroundColor()}, styles.mainContainer, style]} testID="type-tag-test">
      <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>{type.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 60,
    height: 20,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5
  }
})

export default TypeTag