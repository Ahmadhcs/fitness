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
import { Stack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Dashboard = () => {
  const navigation = useNavigation();

  const today = new Date();
  const currentDate = today.toDateString();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.user}>
        <Image
          style={styles.pfp}
          source={require("../images/cole.jpeg")}
        ></Image>

        <View style={styles.innerText}>
          <Text style={styles.userText}>Welcome, Ahmad!</Text>

          <Text style={styles.date}>{currentDate.slice(4)}</Text>
        </View>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <Navbar />
      </View>
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
    borderRadius: "60%",
  },
  date: {
    paddingLeft: 21,
    paddingTop: 20,
  },
  userText: {
    paddingLeft: 20,
    fontSize: 25,
  },
  bottom: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  },
  // Log '+' button
  button: {
    position: "absolute",
    backgroundColor: "#0081CF",
    right: screenWidth * 0.05,
    bottom: screenHeight * 0.15,
    // right: 15,
    // bottom: 125,
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
