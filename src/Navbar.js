import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Navbar = ({ title }) => {
  return (
    <View style={styles.Navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3909ab',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,

  }
})