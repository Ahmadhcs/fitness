import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressChart } from "react-native-chart-kit";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const FoodCard = (props) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const data = {
    labels: ["Protien"], // optional
    data: [props.protein / 250],
    colors: ["red"],
  };

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1, _index) => `rgba(255,0,0,0.2)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.35,
    useShadowColorFromDataset: false, // optional,
  };

  const dataC = {
    labels: ["Carbs"], // optional
    data: [props.carbs / 250],
    colors: ["green"],
  };

  const chartConfigCarbs = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1, _index) => `rgba(0,255,0,0.2)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.35,
    useShadowColorFromDataset: false, // optional,
  };

  const dataF = {
    labels: ["Fats"], // optional
    data: [props.fats / 250],
    colors: ["blue"],
  };

  const chartConfigFat = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1, _index) => `rgba(0,0,255,.2)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.35,
    useShadowColorFromDataset: false, // optional,
  };

  return (
    <View>
      <View style={styles.container}>
        {/* Custom TextInput with placeholder passed from props */}
        <Text style={{ fontSize: 18, fontWeight: "700", width: "90%" }}>Food Name</Text>

        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingTop: 20, width: "50%" }}>
            Serving
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              paddingTop: 21,
              width: "50%",
              textAlign: "right",
            }}>
            300G
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingTop: 15, width: "50%" }}>
            Calories
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              paddingTop: 15,
              width: "50%",
              textAlign: "right",
            }}>
            1,500kcal
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 15 }}>
          <View>
            <ProgressChart
              data={data}
              width={screenWidth * 0.2}
              height={screenHeight * 0.125}
              strokeWidth={14}
              radius={28}
              chartConfig={chartConfig}
              hideLegend={true}
              withCustomBarColorFromData={true}
              style={styles.graph}
            />
            <Text style={{ color: "red", fontWeight: "bold", paddingLeft: 15 }}>
              Protein
            </Text>
            <Text
              style={{
                color: "gray",
                fontWeight: "bold",
                paddingLeft: 15,
                fontSize: 12,
              }}>
              {props.protein}/290g
            </Text>
          </View>

          <View style={{ paddingLeft: screenWidth * 0.075 }}>
            <ProgressChart
              data={dataC}
              width={screenWidth * 0.2}
              height={screenHeight * 0.125}
              strokeWidth={14}
              radius={28}
              chartConfig={chartConfigCarbs}
              hideLegend={true}
              withCustomBarColorFromData={true}
              style={styles.graph}
            />
            <Text style={{ color: "green", fontWeight: "bold", paddingLeft: 15 }}>
              Carbs
            </Text>
            <Text
              style={{
                color: "gray",
                fontWeight: "bold",
                paddingLeft: 11,
                fontSize: 12,
              }}>
              {props.carbs}/290g
            </Text>
          </View>
          <View style={{ paddingLeft: screenWidth * 0.08 }}>
            <ProgressChart
              data={dataF}
              width={screenWidth * 0.2}
              height={screenHeight * 0.125}
              strokeWidth={14}
              radius={28}
              chartConfig={chartConfigFat}
              hideLegend={true}
              withCustomBarColorFromData={true}
              style={styles.graph}
            />
            <Text
              style={{
                color: "blue",
                fontWeight: "bold",
                paddingLeft: screenWidth * 0.058,
              }}>
              Fats
            </Text>
            <Text
              style={{
                color: "gray",
                fontWeight: "bold",
                paddingLeft: 13,
                fontSize: 12,
              }}>
              {props.fats}/290g
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 15 }}>
          <View>
            <ProgressChart
              data={data}
              width={screenWidth * 0.2}
              height={screenHeight * 0.125}
              strokeWidth={14}
              radius={28}
              chartConfig={chartConfig}
              hideLegend={true}
              withCustomBarColorFromData={true}
              style={styles.graph}
            />
            <Text style={{ color: "red", fontWeight: "bold", paddingLeft: 15 }}>
              Protein
            </Text>
            <Text
              style={{
                color: "gray",
                fontWeight: "bold",
                paddingLeft: 15,
                fontSize: 12,
              }}>
              {props.protein}/290g
            </Text>
          </View>

          <View style={{ paddingLeft: screenWidth * 0.075 }}>
            <ProgressChart
              data={dataC}
              width={screenWidth * 0.2}
              height={screenHeight * 0.125}
              strokeWidth={14}
              radius={28}
              chartConfig={chartConfigCarbs}
              hideLegend={true}
              withCustomBarColorFromData={true}
              style={styles.graph}
            />
            <Text style={{ color: "green", fontWeight: "bold", paddingLeft: 15 }}>
              Carbs
            </Text>
            <Text
              style={{
                color: "gray",
                fontWeight: "bold",
                paddingLeft: 11,
                fontSize: 12,
              }}>
              {props.carbs}/290g
            </Text>
          </View>
          <View style={{ paddingLeft: screenWidth * 0.08 }}>
            <ProgressChart
              data={dataF}
              width={screenWidth * 0.2}
              height={screenHeight * 0.125}
              strokeWidth={14}
              radius={28}
              chartConfig={chartConfigFat}
              hideLegend={true}
              withCustomBarColorFromData={true}
              style={styles.graph}
            />
            <Text
              style={{
                color: "blue",
                fontWeight: "bold",
                paddingLeft: screenWidth * 0.058,
              }}>
              Fats
            </Text>
            <Text
              style={{
                color: "gray",
                fontWeight: "bold",
                paddingLeft: 13,
                fontSize: 12,
              }}>
              {props.fats}/290g
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.LogButton}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Log</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.37,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
  },

  input: {},
  LogButton: {
    backgroundColor: "blue",
    width: screenWidth * 0.65,
    height: screenHeight * 0.05,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: screenWidth * 0.1,
    marginTop: screenHeight * 0.0125,
  },
});

export default FoodCard;
