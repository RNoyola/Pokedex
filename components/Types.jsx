import { StyleSheet, View } from "react-native"
import TypeTag from "./TypeTag"


const Types = ({types}) => {
  return (
    <View style={{ flexDirection: "row"}} >
      {types.map((element, index) => <TypeTag key={`${element.type.name}_type_tag_${index}`} type={element.type.name}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Types