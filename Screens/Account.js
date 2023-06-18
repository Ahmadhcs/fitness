import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable} from 'react-native'
import Picker from '@react-native-picker/picker'
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






   



    const handleNewAccount = () => {

          navigation.navigate('AgeGender');
        
      
    };


  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.mainTitle}>Let's set up your credintials</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput placeholder='Username' style={styles.textbox}></TextInput>
        <TextInput placeholder='Password' style={styles.textbox}></TextInput>
        <TextInput placeholder='Confirm Password' style={styles.textbox}></TextInput>


      </View>
      <View style={styles.buttonView}>

        <Pressable style={styles.cont} onPress={handleNewAccount} ><Text style={styles.text}>Continue</Text></Pressable>
        </View>
        
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  top:{
    paddingVertical: 20
  },
  mainTitle:{
    fontWeight: "700",
            fontSize: "20px",
            textAlign: 'center',
  },
  textbox:{
    backgroundColor: 'white',
        width: '80%',
        padding:10,
        borderRadius: 6,
        borderWidth: .7,
        borderColor: "gray",
        marginVertical:5,


  },
  inputs:{
    alignItems: 'center'
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700"
  },
  cont:{
    
    backgroundColor: "blue",
    width: "80%",
    padding:10,
    borderRadius: 6,
    borderWidth: .7,
    borderColor: "blue",
    marginVertical:5,

  },
  buttonView:{
    alignItems: 'center'

  }

})

export default Account