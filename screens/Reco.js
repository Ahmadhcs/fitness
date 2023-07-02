import React, {useLayoutEffect} from "react";
import { Text , StyleSheet, Dimensions, View, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { create } from "d3";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
import SearchBar from "../components/SearchBar";



const Reco = ({ route }) =>{
    const navigation = useNavigation();

    if(route.params === null){
        console.log("oin")
    }else{
        console.log("n")

    }

   
  
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

    return(
        <View style={styles.grayCard}>
            <View style={styles.searchBar}>
                <SearchBar />
            </View>
            <Image style={styles.foodPic} source={require("../images/food.png")}></Image>

        </View>


    )

}

const styles = StyleSheet.create({
    grayCard:{
        backgroundColor: "rgb(200,200,200)",
        height: screenHeight * 0.5,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchBar:{
        paddingLeft: 70,
        paddingTop: 60
   
      
    },
    foodPic:{
        width: screenWidth * 0.75,
        height: screenWidth * 0.75,

    }

})


export default Reco 