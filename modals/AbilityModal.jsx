import { StyleSheet, Text, View } from "react-native"
import { useGetAbilityByNameQuery } from "../services/pokemon"


const AbilityModal = ({route, navigation}) => {
  const { ability } = route.params
  const { data, error, isLoading } = useGetAbilityByNameQuery(ability)

  if (isLoading && data) return (<><Text>Loading...</Text></>)

  const handleEffect = () => {
    if (data) {
      const effectEnglish = data.effect_entries.find((element) => element.language.name === "en")
      return (<Text style={styles.description} testID="ability-description">{effectEnglish.effect}</Text>)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title} testID="ability-title">{ability.toUpperCase()}</Text>
      {handleEffect()}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 20
  },
  description: {
    marginTop: 20,
    fontSize: 16
  }
})

export default AbilityModal