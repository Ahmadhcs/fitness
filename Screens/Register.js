import { View, Text, Pressable, StyleSheet, TextInput, Picker, Button} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import DatePicker from 'react-native-date-picker'

const Register = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])


    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)







  return (
    <SafeAreaView>
      <Text>Register</Text>
      <Pressable>
        <Text onPress={() => navigation.navigate('Home')}>Back</Text>
      </Pressable>
      <View  style={styles.main}>
        <CustomInput placeholder="Name"   /> 
        <CustomInput placeholder="Email"   /> 
        <CustomInput placeholder="Password"   /> 
        <CustomInput placeholder="Confirm Password"   /> 
        <Button title="Birthday" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

     




      </View>

    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  small: {
    width: "30%"
  }
})

export default Register