import { View, Text, SafeAreaView, Image, StyleSheet} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import cole from "../images/cole.jpeg"

const Dashboard = () => {
    const navigation = useNavigation();

    const today = new Date();
    const currentDate = today.toDateString();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <SafeAreaView>
      <View style={styles.user}>
         <Image style={styles.pfp} source={require("../images/cole.jpeg")}></Image>

        <View style={styles.innerText}>

            <Text style={styles.date}>{currentDate.slice(4)}</Text>
            <Text style={styles.userText}>Welcome, Ahmad!</Text>
        </View>

      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    user:{
        display: 'flex',
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 10,
        alignItems: "center"
    },
    pfp:{
        width: 75,
        height: 75,
        borderRadius: "60%",
    },
    date:{
        paddingLeft: 20,
        paddingTop: 5
    },
    userText:{
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 20

    }

})

export default Dashboard