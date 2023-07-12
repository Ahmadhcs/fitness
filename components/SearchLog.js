import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressChart } from "react-native-chart-kit";

import { Feather } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const SearchLog = (props) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

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
    data: [props.fat / 250],
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

  const Modalpop = (props) => {
    const [showModal, setShowModal] = React.useState(props.visible);

    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>{props.children}</View>
        </View>
      </Modal>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            flex: 1,
            paddingLeft: 15,
            paddingTop: 15,
            fontSize: 18,
            fontWeight: "500",
          }}>
          {props.FoodName}
        </Text>
        <TouchableOpacity style={styles.addButton} onPress={() => setVisible(true)}>
          <Feather name="plus" color="white" size={20} />
        </TouchableOpacity>
      </View>

      <Text style={{ paddingLeft: 15, fontWeight: "400", paddingTop: 10, width: "60%" }}>
        {props.serving} Grams{" "}
      </Text>

      <Modalpop visible={visible}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ width: "70%", fontSize: 20, fontWeight: "500" }}>Food Name</Text>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              backgroundColor: "blue",
              width: screenWidth * 0.2,
              height: screenHeight * 0.05,
              borderRadius: 15,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>Log</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 30, flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "400", width: "80%" }}>Serving</Text>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{props.serving}g</Text>
        </View>

        <View style={{ paddingTop: 20, flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "400", width: "70%" }}>Calories</Text>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{props.calories}kcal</Text>
        </View>

        <View style={{ flexDirection: "row", paddingTop: 5, paddingLeft: 12.5 }}>
          <View style={{ textAlign: "center", paddingTop: 10 }}>
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
            <View style={{ paddingTop: 10 }}>
              <Text style={{ color: "red", fontWeight: "bold", paddingLeft: 10 }}>
                Protein
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  paddingLeft: 10,
                  fontSize: 12.5,
                }}>
                {Math.floor(props.protein)}/290g
              </Text>
            </View>
          </View>

          <View style={{ textAlign: "center", paddingLeft: 15, paddingTop: 10 }}>
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
            <View style={{ paddingTop: 10 }}>
              <Text style={{ color: "green", fontWeight: "bold", paddingLeft: 20 }}>
                Carbs
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  paddingLeft: 15,
                  fontSize: 12.5,
                }}>
                {Math.floor(props.carbs)}/290g
              </Text>
            </View>
          </View>

          <View style={{ textAlign: "center", paddingLeft: 20, paddingTop: 10 }}>
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
            <View style={{ paddingTop: 10, paddingLeft: 4 }}>
              <Text style={{ color: "blue", fontWeight: "bold", paddingLeft: 20 }}>
                Fats
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  paddingLeft: 10,
                  fontSize: 12.5,
                }}>
                {Math.floor(props.fat)}/290g
              </Text>
            </View>
          </View>
        </View>
      </Modalpop>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: screenWidth * 0.9,
    height: screenHeight * 0.1,
    borderRadius: 20,
    marginVertical: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.4,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
  },
  graph: {
    paddingTop: 7,
  },
  addButtonWrapper: {
    marginRight: 20,
    marginTop: 10,
  },
  addButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "blue",
    width: screenWidth * 0.1,
    height: screenWidth * 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default SearchLog;
