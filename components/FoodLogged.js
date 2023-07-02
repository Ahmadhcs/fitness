import { View, Text, StyleSheet, FlatList, Pressable, Dimensions} from "react-native";
import React from "react";


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const FoodLogged = () => {
  return (
    <View style={styles.container}>
    <View style={{flexDirection: "row"}}>
        <Text style={{paddingLeft: 10, paddingTop: 12.5, fontSize: 16, fontWeight:"500"}}> Name of the Food</Text>
        <Text style={{textAlign: "right", paddingTop: 22.5, paddingLeft: 125, color:"#42a5f5", fontWeight: "bold"}}>1,500 Cals</Text>
    </View>
  
    <Text style={{paddingLeft: 14, fontWeight: "bold"}}>300G </Text> 
      
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: 0.9 * screenWidth,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop:10,
        height: screenHeight * 0.08

    }
  
});

export default FoodLogged;
