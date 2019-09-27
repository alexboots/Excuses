import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const ExcuseItem = ({excuseItem, handleDelete}) => {
  return(
    <TouchableOpacity
      activeOpacity={.8}
      onPress={handleDelete}
    >
      <View
        style={styles.genericListItem}
      >
        <Text>{excuseItem.item.value}</Text>
      </View>
    </TouchableOpacity>
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
