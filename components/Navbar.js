import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Navbar = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

  return (
        <View style={styles.container}>
        
        </View>

  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'rgb(119,167,196)', //119 167 196 
        height: 100,
        borderTopLeftRadius: "25%",
        borderTopRightRadius: "25%",
       
    }
  
    

})

export default Navbar