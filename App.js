import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, FlatList } from 'react-native';

import { ExcuseItem } from 'components/ExcuseItem'

// ScrollView = renders everything in the list, even if not on page
/* Just put whatever might become scrollable inside of it
    <ScrollView>
      { excuseList.map(excuseItem => {
        if(!excuseItem) return null
          return(
            <View style={styles.genericListItem} key={excuseItem}>
              <Text>{excuseItem}</Text>
            </View>
          )
        })
      }
    </ScrollView>
*/

// FlatList = can be fed infinite data and only deals with what is being rendered
//   sort of like react-window
//   need to give a data and a list item to render, so yeah



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
