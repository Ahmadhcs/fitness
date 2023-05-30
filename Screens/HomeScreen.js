import React from 'react'
import CustomInput from '../components/CustomInput';
import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.input}>
    {/*  IMAGE*/}
        <Text style={styles.login}>Login</Text>
            <CustomInput placeholder="UserName"></CustomInput>
            <CustomInput placeholder="Password"></CustomInput>
            <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.text} >Login</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.push('Register')}>
                <Text style={styles.text} >Register</Text>
            </Pressable>

                    {/*  Register*/}

            <SearchBar></SearchBar>


    </SafeAreaView>

    
  )


}

const styles =  StyleSheet.create({
    input: {
        alignItems: 'center',


    },
    login: {
        paddingVertical: 20,
        fontSize: 30,
        fontWeight: "bold",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width:'80%',
        marginTop: 10,
        borderRadius: 10,
        elevation: 1,
        backgroundColor: 'blue',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "300",
        letterSpacing: 0.25,
        color: 'white',
      },
    
  })

export default HomeScreen