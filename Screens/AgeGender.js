import { View, Text, SafeAreaView,Pressable} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const AgeGender = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])


    const handleAgeGender = () => {
        navigation.navigate('Measure');

    }
  return (
    <SafeAreaView>
      <Pressable onPress={handleAgeGender}><Text>Next</Text></Pressable>
    </SafeAreaView>
  )
}

export default AgeGender