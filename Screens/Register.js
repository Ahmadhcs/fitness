import { View, Text, Pressable} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <Pressable>
        <Text onPress={() => navigation.navigate('Home')}>Back</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Register