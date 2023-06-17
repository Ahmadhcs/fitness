import { View, Text, SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
    const navigation = useNavigation();

    const [userName, setUser] = useState('')
    const [password, setPass] = useState('')


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <SafeAreaView>
      <Text>Birth</Text>
    </SafeAreaView>
  )
}

export default Account