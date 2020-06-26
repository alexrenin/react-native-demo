import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navbar } from './src/Navbar'
import {AddTodo} from './src/addTodo'
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }

    setTodos( prevTodos => [
        ...prevTodos,
        newTodo,
    ])
  }

  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View style={styles.todoList}>
          {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  todoList: {

  }
});
