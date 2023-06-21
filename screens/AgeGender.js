import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const AgeGender = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Function to navigate to Measure screen
  const handleAgeGender = () => {
    navigation.navigate("Measure");
  };
  return (
    <SafeAreaView>
      {/* Next button */}
      <Pressable onPress={handleAgeGender}>
        <Text>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AgeGender;
