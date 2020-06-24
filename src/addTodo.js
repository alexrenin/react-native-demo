import React from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

  const pressHandler = () => {
    onSubmit('Test todo')
  }

  return (
    <View style={styles.block} >
      <TextInput style={styles.input}/>
      <Button
        title="Добавить"
        onPress={pressHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidthWidth: 2,
    borderBottomColor: '#2359ab'
  },

})