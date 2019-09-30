import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const ExcuseItem = ({excuse, handleDelete}) => {
  return(
    <TouchableOpacity
      activeOpacity={.8}
      onPress={() => handleDelete(excuse.item.excuseId)}
    >
      <View
        style={styles.genericListItem}
      >
        <Text>{excuse.item.value}</Text>
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
