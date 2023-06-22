import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width; 

const goToWeight = () =>{
  console.log("in")
}

const weightTracking = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView  style={{ flex: 1 }}>

    <View style={styles.header}>
      <Text style={styles.headerText}>My Weight</Text>
      <Image
          style={styles.pfp}
          source={require("../images/cole.jpeg")}
        ></Image>
    </View>

    <View style={styles.progress}>
      <Text style={styles.progressText}>Your Progress</Text>
    </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate("InputWeight")}>+</Text>
      </TouchableOpacity>

    

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "#0081CF",
    right: screenWidth * 0.05,
    bottom: screenHeight * 0.02,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    marginLeft: 2,
    marginBottom: 3,
  },
  header:{
    paddingLeft: 20,
    flexDirection: "row"
  },
  headerText:{
    paddingTop: 20,

    fontSize: screenWidth * 0.08,
    fontWeight: "bold"

  },
  pfp:{
    width: 75,
    height: 75,
    borderRadius: 60,
    marginLeft: screenWidth * 0.3,
    paddingTop: 10

  },
  progress:{
    backgroundColor: "#00C2A8",
    width: screenWidth * 0.9,
    borderRadius: "10%"
  },
  progressText:{
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "500"
  }
})


export default weightTracking;
