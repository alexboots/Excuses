import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, FlatList } from 'react-native'

import { ExcuseItem } from 'components/ExcuseItem'
import { ExcuseInput } from 'components/ExcuseInput'

export default function App() {
  const [excuseList, setExcuseList] = useState([])

  const handleAddGoal = (excuse) => {
    setExcuseList( currentExcusesList => [...currentExcusesList, { excuseId: Math.random().toString(), value: excuse }])
  }

  const handleDelete = (excuseId) => {
    console.log('excuseId', excuseId);
    setExcuseList( currentExcusesList => {
      return currentExcusesList.filter((excuse => excuse.excuseId !== excuseId))
    })
  }

  return (
    <View style={styles.container}>
      <ExcuseInput handleAddGoal={handleAddGoal} />
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
