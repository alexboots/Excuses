import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, FlatList } from 'react-native'

import { ExcuseItem } from 'components/ExcuseItem'
import { ExcuseInput } from 'components/ExcuseInput'

export default function App() {
  const [excuse, setExcuse] = useState('')
  const [excuseList, setExcuseList] = useState([])

  const handleSetExcuse = (inputText) => setExcuse(inputText)
  const handleAddGoal = () => {
    setExcuseList( currentExcusesList => [...currentExcusesList, { id: Math.random().toString(), value: excuse }])
  }

  useEffect(() => {
    setExcuse('')
  }, [excuseList])

  return (
    <View style={styles.container}>
      <ExcuseInput
        handleSetExcuse={handleSetExcuse}
        handleAddGoal={handleAddGoal}
        excuse={excuse}
      />
      <FlatList
        data={excuseList}
        renderItem={(excuseItem) => <ExcuseItem excuseItem={excuseItem} />}
        keyExtractor={(excuseItem) => excuseItem.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
})
