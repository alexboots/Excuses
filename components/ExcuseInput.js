import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native'

export const ExcuseInput = ({handleAddGoal, showAddModal, setShowAddModal}) => {
  const [excuse, setExcuse] = useState('')
  const handleSetExcuse = (inputText) => setExcuse(inputText)

  const addGoal = () => {
    handleAddGoal(excuse)
    handleSetExcuse('')
  }

  return(
    <Modal visible={showAddModal} animationType="slide" style={styles.modal}>
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
          onPress={() => { addGoal() }}
        />
        <Button title="Cancel" color="red" onPress={() => { setShowAddModal(false) }} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    padding: 100,
  },
  viewInputButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200
  },
})
