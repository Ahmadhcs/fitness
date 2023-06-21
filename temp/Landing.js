import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]); // re-run effect if navigation object changes

  return (
    <SafeAreaView>
      <Text>Landing</Text>
    </SafeAreaView>
  );
};

export default Landing;
