import React from "react";
import { Text , StyleSheet, Dimensions, View, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import FoodLogged from "../components/FoodLogged";


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
import {
  ProgressChart,
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

const dataCals = {
  labels: ["Cals"], // optional
  data: [2000/3000],
  colors:['orange']
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


const chartConfigCals= {
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
  const navigation = useNavigation();

  return (

    <SafeAreaView style={{flex:1}}>
      <ScrollView>

      <View style={styles.header}>
          <Text style={styles.headerText}>My Nutrition</Text>
          <Image style={styles.pfp} source={require("../images/cole.jpeg")}></Image>
      </View>

  <View style={{flexDirection: "row", backgroundColor: "white", borderRadius: 20, width: screenWidth * 0.9, marginLeft: screenWidth * 0.05}}>

    <View style={styles.chartCard}>
        <View style={styles.innerCard}>
              <ProgressChart
        data={data}
        width={screenWidth * 0.25}
        height={screenHeight * 0.175}
        strokeWidth={14}
        radius={28}
        chartConfig={chartConfig}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
    

    </View>
    <View style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20}}>
      
      <Text style={{color:"red", fontWeight:"bold"}}>Protein</Text>
      <Text style={{color:"gray", fontWeight:"700", fontSize: 12.5}}>25/340g</Text>
    </View>
   

  </View>
  <View style={styles.chartCard}>
  <ProgressChart
        data={dataC}
        width={screenWidth * 0.25}
        height={screenHeight * 0.175}
        strokeWidth={14}
        radius={28}
        chartConfig={chartConfigCarbs}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
    <View style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20}}>
      
      <Text  style={{color:"green", fontWeight:"bold"}}>Carbs</Text>
    <Text style={{color:"gray", fontWeight:"700", fontSize: 12.5}}>49/340g</Text>
    </View>
    </View>

    <View style={styles.chartCard}>
    <ProgressChart
        data={dataF}
        width={screenWidth * 0.25}
        height={screenHeight * 0.175}
        strokeWidth={14}
        radius={28}
        chartConfig={chartConfigFat}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
      <View style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20}}>
      <Text style={{color:"blue", fontWeight:"bold"}}>Fat</Text>
    <Text style={{color:"gray", fontWeight:"700", fontSize: 12.5}}>49/340g</Text>
    </View>
      </View>
      <View style={styles.chartCard}>
    <ProgressChart
        data={dataCals }
        width={screenWidth * 0.25}
        height={screenHeight * 0.175}
        strokeWidth={14}
        radius={28}
        chartConfig={chartConfigCals}
        hideLegend={true}
        withCustomBarColorFromData={true}
        style={styles.graph}

      />
      <View style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20}}>
      <Text style={{color:"orange", fontWeight:"bold"}}>Calories</Text>
    <Text style={{color:"gray", fontWeight:"700", fontSize: 12.5}}>2000/3000</Text>
    </View>
    </View>
  </View>
  
  <View style={{flexDirection: "row", marginTop: 10}}>
    
  
  </View>

  
  <View style={styles.breakfast}>
    <Text style={{fontSize: 20, fontWeight: "700", paddingLeft: 10}}>Logged Food</Text>
    <FoodLogged protein="89" />
    <FoodLogged />
    <FoodLogged />

  </View>


  </ScrollView>
  <Pressable onPress={() => navigation.navigate("Reco")} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
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
    width: screenWidth * 0.225,
  },
  graph:{
    
  },
  macro:{
    fontSize: 16,
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
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20,
    height: screenHeight * 0.03
  },
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



})

export default Nutrition;
