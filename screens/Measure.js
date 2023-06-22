import { Text, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Measure = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>MEASURE</Text>
      <Pressable>
        <Text onPress={() => navigation.navigate("Dashboard")}>
          Dashboard (Temporary)
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Measure;
