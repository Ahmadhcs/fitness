import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput} from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const Email = ({route}) => {
    const navigation = useNavigation();

    const name = route.params;

    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])



    const handleEmail = () => {
        //Handle empty or not valid 
        
        if(email !== confirm){
            console.log("handle Error")
        }else{
            navigation.navigate('Account', {email, confirm} );
          
        }
      };
  
    


  return (
    <SafeAreaView>
      <Text style={styles.title}>Hey {name},
      What is Your Email!</Text>
      <View style={styles.main}>
        <TextInput placeholder="Email Address"  style={styles.textbox} onChangeText={setEmail}  />  
        <TextInput placeholder="Confirm Email "  style={styles.textbox} onChangeText={setConfirm}   />  

        <Pressable style={styles.cont} onPress={handleEmail}><Text style={styles.text}>Continue</Text></Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
    title: {
   
            fontWeight: "700",
            fontSize: "30px",
            textAlign: 'center',
            paddingLeft: 15
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
      textbox:{
        backgroundColor: 'white',
            width: '80%',
            padding:10,
            borderRadius: 6,
            borderWidth: .7,
            borderColor: "#e8e8e8",
            marginVertical:5,
    
      },
      main: {
        alignItems: 'center',
        
      },
      text: {
        color: "white",
        textAlign: "center",
        fontWeight: "700"
      }
})

export default Email