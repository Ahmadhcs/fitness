import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {LinearGradient} from 'expo-linear-gradient';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import * as d3 from 'd3';

import WeightBar from "../components/WeightBar";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const goToWeight = () => {
  console.log("in");
};


const weightTracking = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Weight</Text>
          <Image style={styles.pfp} source={require("../images/cole.jpeg")}></Image>
        </View>

    
  <LineChart 
    data={{
      labels: ["One", "Two", "Three", "Four", "Five"],
      datasets: [
        {
          data: [
            87.6,86.0, 87.1, 88.0, 87.5
          ]
        }
      ]
    }}
    width={screenWidth * 0.9} // from react-native
    height={screenHeight * 0.35}
    yAxisSuffix="kg"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#1e88e5",
      backgroundGradientTo: "#42a5f5",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
       
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#1e88e5"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      paddingLeft: 20,
    }}
  />
        
         
        <View style={styles.weightHistory}>
          <Text style={styles.historyTitle}>Weight History</Text>
          <View style={styles.weightBars}>

            <WeightBar />
            <WeightBar />
            <WeightBar />
            <WeightBar />
            <WeightBar />
            <WeightBar />
          </View>
        </View>
      </ScrollView>

      <Pressable onPress={() => navigation.navigate("InputWeight")} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
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
  header: {
    paddingLeft: 20,
    flexDirection: "row",
    paddingBottom: screenHeight * 0.02,
  },
  headerText: {
    paddingTop: 20,
    fontSize: screenWidth * 0.08,
    fontWeight: "bold",
  },
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: screenWidth * 0.325,
    marginTop: screenHeight * 0.01,
    paddingTop: 20,
  },
  progress: {
    backgroundColor: "white",
    width: screenWidth * 0.9,
    height: screenHeight * 0.175,
    marginLeft: 18, //add more accurate using screen
    borderRadius: "25%",
    opacity: 1,
    marginVertical: 8,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2.5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 6,
  },
  progressText: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "300",
  },
  goalWeight: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    width: "100%",
  },
  goalTitle: {
    color: "gray",
    fontSize: 12.5,
    fontWeight: "bold",
  },
  goalActual: {
    fontSize: 20,
    fontWeight: "600",
  },
  goalCurrent: {
    width: "33%",
  },
  goalLeft: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  goalTarget: {
    width: "33%",
    paddingRight: 10,
  },
  bar: {
    position: "relative",
    paddingTop: 20,
    paddingLeft: 15,
  },
  bottomBar: {
    width: screenWidth * 0.8,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#009EFA",
    marginTop: 20,
    marginLeft: 15,
    position: "absolute",
  },
  actualBar: {
    width: (screenWidth * 0.8 * (90 - 50)) / 100, // Will be an equation of how much -- (o)
    height: 20,
    borderRadius: 20,
    backgroundColor: "#00D2FC",
  },
  weightHistory: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  historyTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  weightBars: {
    paddingVertical: 10,
  },
  graph: {
    backgroundColor: "white",
    width: screenWidth * 0.9,
    height: screenHeight * 0.4,
    borderRadius: "20%",
    borderColor: "black",
    borderWidth: 0.15,
    marginLeft: 20,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2.5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 6,
  },
  Line:{
    marginLeft:20
  }
});

export default weightTracking;
