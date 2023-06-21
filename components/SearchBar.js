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

// Is this the recipe API? the link dont work for me - Mustafa
const spoon = "https://api.spoonacular.com/recipes/complexSearch";
const headerConfig = { headers: { Accept: "application/json" } };

export default function SearchBar() {
  const [input, setInput] = React.useState("");
  const [text, setText] = React.useState("");

  // Fetch data from Spoon API
  const fetchData = (value) => {
    fetch(`${spoon}?apiKey=cc26ee6ac9ab4f9baddaa1343d79c0f8`)
      .then((resp) => resp.json())
      .then((json) => {
        // Filter results that include the search value
        const result = json.results.filter((obj) => {
          return obj.title.toLowerCase().includes(value.toLowerCase());
        });
        setText(result);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (text) => {
    setInput(text);

    // If the input has more than two characters, fetch data
    if (text.length > 2) {
      fetchData(text);
    }
  };

  return (
    <View style={styles.total}>
      <View style={styles.SearchBack}>
        {/* Text input for search with change handler */}
        <TextInput
          placeholder="Input Your Meal!"
          value={input}
          style={styles.search}
          onChangeText={(text) => handleChange(text)}
        />
      </View>
      {/* Pass fetched data and input setters to SearchFilter */}
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
