import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'

const NFTCard = ({data}) => {
  const navigation = useNavigation()

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
     <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard