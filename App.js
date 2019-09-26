import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView } from 'react-native';

export default function App() {
  const [excuse, setExcuse] = useState('')
  const [excuseList, setExcuseList] = useState([])

  const handleSetExcuse = (inputText) => setExcuse(inputText)
  const handleAddGoal = () => {
    setExcuseList( currentExcusesList => [...currentExcusesList, excuse])
  }

  useEffect(() => {
    setExcuse('')
  }, [excuseList])

  return (
    <ScrollView style={styles.container}>
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
      <View>
        { excuseList.map(excuseItem => {
          if(!excuseItem) return null
            return(
              <View style={styles.genericListItem} key={excuseItem}>
                <Text>{excuseItem}</Text>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
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
