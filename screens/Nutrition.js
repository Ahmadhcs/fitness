import React from "react";
import { Text , StyleSheet, Dimensions, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {ProgressBar} from '@react-native-community/progress-bar-android';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const data = {
  labels: ["Protien"], // optional
  data: [159/250],
  colors:['red']
};

const dataC = {
  labels: ["Carbs"], // optional
  data: [39/250],
  colors:['green']
};

const dataF = {
  labels: ["Fats"], // optional
  data: [89/250],
  colors:['blue']
};


const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0  ,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1, _index) => `rgba(255,0,0,0.07)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.35,
  useShadowColorFromDataset: false, // optional,
};


const chartConfigCarbs = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0  ,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1, _index) => `rgba(0,255,0,0.1)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.35,
  useShadowColorFromDataset: false, // optional,
};


const chartConfigFat = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0  ,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1, _index) => `rgba(0,0,255,.07)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.35,
  useShadowColorFromDataset: false, // optional,
};

const Nutrition = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
          <Text style={styles.headerText}>My Nutrition</Text>
          <Image style={styles.pfp} source={require("../images/cole.jpeg")}></Image>
      </View>

  <View style={{flexDirection: "row"}}>

    <View style={styles.chartCard}>
        <View style={styles.innerCard}>
              <ProgressChart
        data={data}
        width={screenWidth * 0.4}
        height={screenHeight * 0.175}
        strokeWidth={15}
        radius={30}
        chartConfig={chartConfig}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
    

    </View>
    <Text>Protien</Text>
    <Text>25/340g</Text>

  </View>
  <View style={styles.chartCard}>
  <ProgressChart
        data={dataC}
        width={screenWidth * 0.4}
        height={screenHeight * 0.175}
        strokeWidth={15}
        radius={30}
        chartConfig={chartConfigCarbs}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
      <Text>carbs</Text>
    <Text>49/340g</Text>
    </View>
  </View>
  
  <View style={{flexDirection: "row", marginTop: 10}}>
    <View style={styles.chartCard}>
    <ProgressChart
        data={dataF}
        width={screenWidth * 0.4}
        height={screenHeight * 0.175}
        strokeWidth={15}
        radius={30}
        chartConfig={chartConfigFat}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
      <Text>carbs</Text>
    <Text>49/340g</Text>
      </View>
      <View style={styles.chartCard}>
        <Text>heloo</Text>
      </View>
  
  </View>

  
  <View style={styles.breakfast}>
    <Text style={{fontSize: 20, color:"#1e88e5", fontWeight: "700"}}>Breakfast</Text>
    
  </View>


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header:{
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
    marginLeft: screenWidth * 0.26,
    marginTop: screenHeight * 0.01,
    paddingTop: 20,
  },
  chartCard:{
    width: "42.5%",
    backgroundColor: "white",
    marginLeft: screenWidth * 0.05,
    borderRadius: 20,

  },
  graph:{
    
  },
  macro:{
    fontSize: 17,
    fontWeight: "500",
    paddingLeft:15,
    paddingTop: 15
  },
  bar:{
    height: 10,
    borderRadius: 20,
  },
  innerCard:{
    flexDirection: "row"
  },
  breakfast:{
    width: screenWidth * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20
  },



})

export default Nutrition;
