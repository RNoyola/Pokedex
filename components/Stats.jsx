import { StyleSheet, Text, View } from "react-native"

const Stats = ({stats}) => {
  if (stats.length  === 0) return (null)
  return (
    <View style={styles.mainContainer}>
      {stats.map((element) => (
        <Text key={`${element.stat.name}_stat`} style={styles.textStyle} testID="stat-item">
          {`${element.stat.name.toUpperCase()}: ${element.base_stat}`}
        </Text>))}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10
  },
  textStyle: {
    fontSize: 15
  }
})

export default Stats