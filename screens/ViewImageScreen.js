import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

import colors from '../config/colors.js'

export default class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image 
          resizeMode='contain' 
          style={styles.image} 
          source={require('../assets/chair.jpg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute', 
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute', 
    top: 40,
    right: 30,
  }
})