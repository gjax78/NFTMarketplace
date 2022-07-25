import { View, SafeAreaView, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, NFTdata } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

export default function Home() {
  return (
   <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar background={COLORS.primary}/>
    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0}}>
        <FlatList 
          data={NFTdata}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
   </SafeAreaView>
  )
}
