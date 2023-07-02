import { Text , StyleSheet, Dimensions, View, Image, ScrollView, Pressable, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { create } from "d3";
import { useState } from "react";
import { useLayoutEffect } from "react";
const spoon = "https://api.spoonacular.com/recipes/complexSearch";
const headerConfig = { headers: { Accept: "application/json" } };

// const detailedMacros = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`

//Logic --> On press use the link above and insert the idea, then extract all the macros and add them to the button

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Reco = () =>{
    const navigation = useNavigation();
    const [suggestions, setSuggestions] = useState([]);


    const [input, setInput] = useState("");
    const [text, setText] = useState("");


  
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

   const handleButtonPress = (item) =>{
        setSuggestions([...suggestions, item])
    }

  
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

    return(
    <View>
        <View style={styles.grayCard}>
            <View style={styles.total}>
            <View style={styles.SearchBack}>
            {/* Text input for search with change handler */}
            <TextInput
                placeholder="Input Your Meal!"
                value={input}
                style={styles.search}
                onChangeText={(text) => handleChange(text)}
                placeholderTextColor="gray"
            />
            </View>
            {/* Pass fetched data and input setters to SearchFilter */}
            <View style={styles.filter}>
            {/* Render a list of pressable components based on passed data */}
            <FlatList
            data={text}
            renderItem={({ item }) => {
                // Return nothing if input is empty
                if (input == "") {
                return <Text></Text>;
                }
    
                // Return pressable component for each item in data
                return (
                <Pressable style={styles.press} onPress={() => handleButtonPress(item)}>
                    <Text style={styles.output}>{item.title}</Text>
                </Pressable>
                );
            }}
            />
        </View>
        </View>
            <Image style={styles.foodPic} source={require("../images/food.png")}></Image>

        </View>
        {suggestions.map((item, index) => (
            <View style={styles.foodCard}>
                <Image style={styles.foodPick} source={{uri: `${item.image}`}}></Image>

            </View>
        ))}

    </View>

   
      


    )

}





const styles = StyleSheet.create({
    grayCard:{
        backgroundColor: "rgb(215,215,215)",
        height: screenHeight * 0.5,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchBar:{
        paddingLeft: 70,
        paddingTop: 60
   
      
    },
    foodPic:{
        width: screenWidth * 0.75,
        height: screenWidth * 0.75,

    },
    press: {
        backgroundColor: "white",
        width: "80%",
        borderRadius: 5,
        borderWidth: 0.7,
        borderColor: "#e8e8e8",
      },
      SearchBack: {
        backgroundColor: "white",
        width: "80%",
        paddingVertical: 8,
        paddingLeft: 15,
        borderRadius: 15,
        borderWidth: 0.7,
        borderColor: "#e8e8e8",
      },
      total: {
        width: screenWidth * 0.95,
        marginLeft: 65,
        marginTop: 50
      },
      search:{
        color: "black",
        height: screenHeight * 0.0225
      },
      foodPick:{
        width: screenWidth * 0.25,
        height: screenWidth * 0.25,
        borderRadius: 20
      },
      foodCard:{
        paddingVertical: 20,
        paddingLeft: 20
      }

})


export default Reco 