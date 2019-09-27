import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export const ExcuseInput = (props) => {
  const { handleSetExcuse, handleAddGoal, excuse } = props
  return(
    <View style={styles.viewInputButton}>
      <TextInput
        placeholder="Excuses"
        style={styles.input}
        onChangeText={handleSetExcuse}
        value={excuse}
      />
      <Button
        title="Add"
        style={styles.button}
        onPress={handleAddGoal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewInputButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200
  },
})
