import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Measure = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleMeasure = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView>
      <Text>MEASURE</Text>

      {/* Weight input */}
      <TextInput
        style={styles.input}
        placeholder="Weight"
        onChangeText={setWeight}
        value={weight}
      />

      {/* Height input */}
      <TextInput
        style={styles.input}
        placeholder="Height"
        onChangeText={setHeight}
        value={height}
      />

      <View style={styles.buttonView}>
        <Pressable style={styles.cont} onPress={handleMeasure}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>

      {/* Back button */}
      <Pressable>
        <Text onPress={() => navigation.navigate("AgeGender")}>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cont: {
    backgroundColor: "blue",
    width: "80%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: "blue",
    marginVertical: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});

export default Measure;
