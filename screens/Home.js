import { View, SafeAreaView, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, NFTdata } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

export default function Home() {
  return (
   <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar background={COLORS.primary}/>
   </SafeAreaView>
  )
}
