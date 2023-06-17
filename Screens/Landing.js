import { View, Text, SafeAreaView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Landing = () => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <SafeAreaView>
      <Text>Landing</Text>
    </SafeAreaView>
  )
}

export default Landing