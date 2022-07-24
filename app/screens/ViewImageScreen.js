import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class ViewImageScreen extends Component {
  render() {
    return (
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  }
})