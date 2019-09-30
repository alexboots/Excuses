import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'

import { ExcuseItem } from 'components/ExcuseItem'
import { ExcuseInput } from 'components/ExcuseInput'

export default function App() {
  const [excuseList, setExcuseList] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)

  const handleAddGoal = (excuse) => {
    setShowAddModal(false)
    setExcuseList( currentExcusesList => [...currentExcusesList, { excuseId: Math.random().toString(), value: excuse }])
  }

  const handleDelete = (excuseId) => {
    setExcuseList( currentExcusesList => {
      return currentExcusesList.filter((excuse => excuse.excuseId !== excuseId))
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={()=>{ setShowAddModal(true) }}/>
      <ExcuseInput handleAddGoal={handleAddGoal} showAddModal={showAddModal} />
      <FlatList
        data={excuseList}
        renderItem={(excuse) => <ExcuseItem excuse={excuse} handleDelete={handleDelete}/>}
        keyExtractor={(excuseItem) => excuseItem.excuseId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
})
