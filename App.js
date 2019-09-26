import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, FlatList } from 'react-native';

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

const ExcuseList = ({excuseItem}) => {
  return(
    <View style={styles.genericListItem}>
      <Text>{excuseItem.item}</Text>
    </View>
  )
}

export default function App() {
  const [excuse, setExcuse] = useState('')
  const [excuseList, setExcuseList] = useState([])

  const handleSetExcuse = (inputText) => setExcuse(inputText)
  const handleAddGoal = () => {
    setExcuseList( currentExcusesList => [...currentExcusesList, excuse])
  }

  // useEffect(() => {
  //   setExcuse('')
  // }, [excuseList])

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
        renderItem={(excuseItem) => <ExcuseList excuseItem={excuseItem} />}
        keyExtractor={(excuseItem) => excuseItem}
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
  genericListItem: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 30,
    marginVertical: 10,
    backgroundColor: 'purple',
  },
});
