import React, { useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";

const AgeGender = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleAgeGender = () => {
    navigation.navigate("Measure");
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
  };

  // Age options (temporary) I want to implement a native one thats horizontal and looks better later
  const ageOptions = [
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
  ];

  return (
    <SafeAreaView>
      {/* Gender buttons */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.genderButton,
            selectedGender === "male" && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderSelection("male")}
        >
          <Text style={styles.genderButtonText}>Male</Text>
        </Pressable>
        <Pressable
          style={[
            styles.genderButton,
            selectedGender === "female" && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderSelection("female")}
        >
          <Text style={styles.genderButtonText}>Female</Text>
        </Pressable>
      </View>

      {/* Age selector */}
      <View style={styles.ageSelectorContainer}>
        <RNPickerSelect
          onValueChange={handleAgeSelection}
          items={ageOptions}
          style={pickerSelectStyles}
          value={selectedAge}
        />
      </View>

      {/* Next button */}
      <View style={styles.buttonView}>
        <Pressable style={styles.cont} onPress={handleAgeGender}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>

      {/* Back button */}
      <Pressable>
        <Text onPress={() => navigation.navigate("EmailPassword")}>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  genderButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "45%",
  },
  selectedGenderButton: {
    backgroundColor: "blue",
    borderColor: "blue",
  },
  genderButtonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
  },
  ageSelectorContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});

export default AgeGender;
