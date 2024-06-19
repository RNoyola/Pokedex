import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"


const MainAbilities = ({mainAbilities}) => {
  const navigation = useNavigation()
  if (mainAbilities.length === 0) return null
  return (
    <View style={styles.mainContainer}>
      {mainAbilities.map((element, index) => (
        <TouchableOpacity
          key={`${element.ability.name}_ability_${index}`}
          onPress={() => navigation.navigate("AbilityModal", { ability: element.ability.name })}
          style={styles.abilityButton}
          testID="ability-test"
        >
          <Text
            key={`${element.ability.name}_text_ability_${index}`}
            style={styles.textStyle}
          >
            {element.ability.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  abilityButton: {
    width: 125,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  textStyle: {
    textAlign: "center"
  }
})

export default MainAbilities
