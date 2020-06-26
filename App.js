import React, { useState } from 'react'
import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
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

  const removeTodo = (id) => {
    setTodos( prevState => prevState.filter( (todo) => todo.id !== id ) )
  }

  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={ ({ item }) => {
            return <Todo
              todo={item}
              onRemove={removeTodo}
            />
          }}
          keyExtractor={ item => item.id.toString()}
        />
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
