import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DayLogged from "./DayLogged";

const WeekLogged = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}>
        <DayLogged />
        <DayLogged />
        <DayLogged />
        <DayLogged />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  input: {},
});

export default WeekLogged;
