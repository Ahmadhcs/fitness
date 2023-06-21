import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { Dimensions } from "react-native";

// Screen dimensions
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Dashboard = () => {
  const navigation = useNavigation();

  // Date details
  const today = new Date();
  const currentDate = today.toDateString();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Profle Picture */}
      <View style={styles.user}>
        <Image
          style={styles.pfp}
          source={require("../images/cole.jpeg")}
        ></Image>

        {/* Welcome Text and Date */}
        <View style={styles.innerText}>
          <Text style={styles.userText}>Welcome, Ahmad!</Text>

          <Text style={styles.date}>{currentDate.slice(4)}</Text>
        </View>
      </View>

      {/* Dashboard */}
      <View style={styles.middleSection}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
        </View>
      </View>

      {/* Log Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      {/* I commented this out because I declared it in the App.js so we can
      choose which pages got a navbar
      <View style={styles.bottom}>
        <Navbar />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: "center",
  },
  pfp: {
    width: 75,
    height: 75,
    borderRadius: 60,
  },
  date: {
    paddingLeft: 21,
    paddingTop: 20,
  },
  userText: {
    paddingLeft: 20,
    fontSize: 25,
  },
  // Navbar styling also moved to App.js
  // bottom: {
  //   position: "absolute",
  //   right: 0,
  //   left: 0,
  //   bottom: 0,
  // },
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
  middleSection: {
    paddingTop: 30,
  },
  header: {},
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20,
  },
});

export default Dashboard;
