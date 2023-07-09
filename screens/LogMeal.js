import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchLog from "../components/SearchLog";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const LogMeal = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]); // re-run effect if navigation object changes

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingLeft: screenWidth * 0.065, paddingTop: screenHeight * 0.03 }}>
        <Text style={{ fontSize: screenWidth * 0.06, fontWeight: "700" }}>Log Food</Text>
      </View>

      <View
        style={{ paddingLeft: screenWidth * 0.055, paddingTop: screenHeight * 0.025 }}>
        <TextInput
          placeholder="Search Food"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.searchBar}
        />
      </View>

      <View style={{ paddingLeft: screenWidth * 0.055, paddingTop: screenHeight * 0.03 }}>
        <Text style={{ fontSize: screenWidth * 0.06, fontWeight: "700" }}>History</Text>
      </View>
      <View style={{ paddingLeft: screenWidth * 0.055, paddingTop: screenHeight * 0.03 }}>
        <Text style={{ fontSize: screenWidth * 0.06, fontWeight: "700" }}>
          Search Results
        </Text>
        <View style={{ paddingTop: screenHeight * 0.02 }}>
          <SearchLog />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    width: screenWidth * 0.8,
    paddingVertical: 8,
    paddingLeft: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
});

export default LogMeal;
