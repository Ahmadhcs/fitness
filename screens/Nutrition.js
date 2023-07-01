import React from "react";
import { Text , StyleSheet, Dimensions, View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
  labels: ["Protien", "Carbs", "Fats"], // optional
  data: [159/250, 0.6, 0.8]
};

const chartConfig = {
  backgroundGradientFrom: "gray",
  backgroundGradientFromOpacity: 1  ,
  backgroundGradientTo: "gray",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional,
};

const Nutrition = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
          <Text style={styles.headerText}>My Nutrition</Text>
          <Image style={styles.pfp} source={require("../images/cole.jpeg")}></Image>
        </View>

        <ProgressChart
  data={data}
  width={screenWidth * 0.9}
  height={screenHeight * 0.2}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
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

})

export default Nutrition;
