import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ExcuseItem = ({excuseItem}) => {
  return(
    <View style={styles.genericListItem}>
      <Text>{excuseItem.item.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  genericListItem: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 30,
    marginVertical: 10,
    backgroundColor: 'purple',
  },
})
