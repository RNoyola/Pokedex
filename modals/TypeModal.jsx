import { StyleSheet, Text, View } from "react-native"
import { useGetTypeByNameQuery } from "../services/pokemon"
import TypeTag from "../components/TypeTag"

const TypeModal = ({route, navigation}) => {
  const { type } = route.params
  const { data, error, isLoading } = useGetTypeByNameQuery(type)

  if (isLoading && data) return (<><Text>Loading...</Text></>)

  const handleDamageRelations = () => {
    if (data) {
      return (
        <View style={styles.mainContainer} testID="type-modal-main">
          <Text>Strong (Double Damage) against: </Text>
          <View style={styles.tagsContainer}>
            {data.damage_relations.double_damage_to.map((element) => (<TypeTag style={styles.tagStyle} key={`${element.name}_double_damage`} type={element.name} disable/>))}
          </View>
          <Text>Resistant (Half Damage taken) against: </Text>
          <View style={styles.tagsContainer}>
            {data.damage_relations.half_damage_from.map((element) => (<TypeTag style={styles.tagStyle} key={`${element.name}_half_damage`}  type={element.name} disable/>))}
          </View>
          <Text>Inmmune (No Damage taken) against: </Text>
          <View style={styles.tagsContainer}>
            {data.damage_relations.no_damage_from.map((element) => (<TypeTag style={styles.tagStyle}  key={`${element.name}_inmune`}  type={element.name} disable/>))}
          </View>
          <Text>Weak (Double Damage taken) against: </Text>
          <View style={styles.tagsContainer}>
            {data.damage_relations.double_damage_from.map((element) => (<TypeTag style={styles.tagStyle}  key={`${element.name}_double_damage_taken`}  type={element.name} disable/>))}
          </View>
          <Text>Weak (Half Damage) against: </Text>
          <View style={styles.tagsContainer}>
            {data.damage_relations.half_damage_to.map((element) => (<TypeTag style={styles.tagStyle} key={`${element.name}_half_damage_taken`}  type={element.name} disable/>))}
          </View>
          <Text>Attack are useless (No Damage) against: </Text>
          <View style={styles.tagsContainer}>
            {data.damage_relations.no_damage_to.map((element) => (<TypeTag style={styles.tagStyle}  key={`${element.name}_inmune_to`} type={element.name} disable/>))}
          </View>
          
        </View>
      )
    }
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>{type.toUpperCase()}</Text>
      <View style={{ flexDirection: "row"}}>
        {handleDamageRelations()}
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 20
  },
  tagStyle: {
    marginHorizontal: 3,
    marginBottom: 5
  }
})

export default TypeModal