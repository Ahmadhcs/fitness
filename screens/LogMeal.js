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
  import React, { useLayoutEffect, useState, useEffect} from "react";
  import { useNavigation } from "@react-navigation/native";
  import SearchLog from "../components/SearchLog";

  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;


  //Spoonacular API shit 
  const APIKEY = 'e1e9e17338544f5983922872c0475bd2'
  const getIngredient = `https://api.spoonacular.com/food/ingredients/search?apiKey=${APIKEY}&number=5&query=`






  const LogMeal = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [foodArray, setFoodArray] = useState([]);
    const [amount, setAmount] = useState('');




    const fetchData = (value) => {
        setFoodArray([])
        console.log("first Error")
        fetch(`${getIngredient}${value}`)
          .then((resp) => resp.json())
          .then((json) => {
            console.log(json.results)
            // Filter results that include the search value
            const result = json.results
        .filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
        .map((obj) => obj.id);
      setSearchResults(result);



    result.forEach((id) => {
        const unit = "grams"
        setAmount(100)
        const getMacros = `https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=${APIKEY}&amount=${amount}&unit=${unit}`
        fetch(getMacros)
        .then((resp) => resp.json())
        .then((foodJson) => {
          setFoodArray((prevFoodArray) => [...prevFoodArray, foodJson]);
        })
        .catch((error) => console.log(error));
    });
  })
  .catch((error) => console.log(error));



};

      const handleTextInputSubmit = () => {
        //Make sure to include amount and Serving Unit 
        setAmount(100)

        if (searchText.length > 3) {
          fetchData(searchText);
        }
      };

    
     

  
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]); // re-run effect if navigation object changes
  
   
    return (
      <SafeAreaView style={{flex:1}} >
        <View style={{paddingLeft: screenWidth * 0.065, paddingTop: screenHeight * 0.03}}>
            <Text style={{fontSize: screenWidth * 0.06, fontWeight: "700"}}>Log Food</Text>
        </View>

        <View style={{paddingLeft: screenWidth * 0.055, paddingTop:screenHeight * 0.025 }}>
        <TextInput
          placeholder="Search Food"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text)
            }}
          style={styles.searchBar}
     onSubmitEditing={() => handleTextInputSubmit()} // Call handleTextInputSubmit on submit event
        />
        </View>

        <View style={{paddingLeft: screenWidth * 0.055, paddingTop:screenHeight * 0.03 }}>
            <Text  style={{fontSize: screenWidth * 0.06, fontWeight: "700"}}>History</Text>
        </View>
        <View style={{ paddingLeft: screenWidth * 0.055, paddingTop: screenHeight * 0.03 }}>
        <Text style={{ fontSize: screenWidth * 0.06, fontWeight: "700" }}>Search Results</Text>
            <View style={{ paddingTop: screenHeight * 0.01 }}>
                {foodArray.map((foodItem) => {
                const proteinNutrient = foodItem.nutrition.nutrients.find(
                    (nutrient) => nutrient.name === 'Protein'
                );

                const carbNutrient = foodItem.nutrition.nutrients.find(
                    (nutrient) => nutrient.name === 'Carbohydrates'
                );

                const fatNutrient = foodItem.nutrition.nutrients.find(
                    (nutrient) => nutrient.name === 'Fat'
                );

                {/* const calories = foodItem.nutrition.nutrients.find(
                    (nutrient) => nutrient.name === 'Calories'
                ); */}

                return (
                    <SearchLog
                    key={foodItem.id}
                    FoodName={foodItem.name}
                    protein={proteinNutrient ? proteinNutrient.amount : 0}
                    carbs={carbNutrient ? carbNutrient.amount : 0}
                    fat={fatNutrient ? fatNutrient.amount : 0}
                    // protein={200}
                    // carbs={200}
                    // fat={200}
                    serving={amount}
                    calories={365}

                    />
                );
                })}
            </View>
        </View>
        
        
       
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    searchBar:{
        backgroundColor: "white",
        width: screenWidth * 0.8,
        paddingVertical: 8,
        paddingLeft: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",

    }
  })
 
  
  export default LogMeal;