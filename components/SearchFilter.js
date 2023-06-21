import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View style={styles.filter}>
      {/* Render a list of pressable components based on passed data */}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          // Return nothing if input is empty
          if (input == "") {
            return <Text></Text>;
          }

          // Return pressable component for each item in data
          return (
            <Pressable style={styles.press} onPress={() => setInput("")}>
              <Text style={styles.output}>{item.title}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {},
  output: {},
  press: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: "#e8e8e8",
  },
});

export default SearchFilter;
