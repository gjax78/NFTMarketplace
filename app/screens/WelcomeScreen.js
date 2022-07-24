import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    ></ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})