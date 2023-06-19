import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";

const spoon = "https://api.spoonacular.com/recipes/complexSearch";
const headerConfig = { headers: { Accept: "application/json" } };

export default function SearchBar() {
  const [input, setInput] = React.useState("");

  const [text, setText] = React.useState("");

  const fetchData = (value) => {
    fetch(`${spoon}?apiKey=cc26ee6ac9ab4f9baddaa1343d79c0f8`)
      .then((resp) => resp.json())
      .then((json) => {
        const result = json.results.filter((obj) => {
          return obj.title.toLowerCase().includes(value.toLowerCase());
        });
        setText(result);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (text) => {
    setInput(text);

    if (text.length > 2) {
      fetchData(text);
    }
  };

  return (
    <View style={styles.total}>
      <View style={styles.SearchBack}>
        <TextInput
          placeholder="Input Your Meal!"
          value={input}
          style={styles.search}
          onChangeText={(text) => handleChange(text)}
        />
      </View>
      <SearchFilter data={text} input={input} setInput={setInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBack: {
    backgroundColor: "white",
    width: "80%",
    paddingVertical: 8,
    paddingLeft: 5,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: "#e8e8e8",
  },
  total: {
    width: 450,
    paddingVertical: 8,
    paddingLeft: 75,
  },
});
