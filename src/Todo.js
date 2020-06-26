import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove }) => {

  const longPressHandler = () => {
    onRemove(todo.id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={ f => f}
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee0c3',
    borderRadius: 5,
    marginBottom: 10,
  }
})