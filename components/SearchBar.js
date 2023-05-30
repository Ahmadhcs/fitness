import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'


const spoon = "https://api.spoonacular.com/recipes/complexSearch"
const headerConfig = { headers: { Accept: "application/json" ,},}


export default function SearchBar() {
    const [input, setInput] = React.useState("")
 


    const fetchData = (value)  =>{
        fetch(`${spoon}?apiKey=e1e9e17338544f5983922872c0475bd2`)
        .then((resp) => resp.json())
        .then((json) => {
            console.log(json)
            const result = json.results.filter((obj) => {
                
                console.log(obj.title.includes(value))
            })

    


        }).catch((error) => console.log(error));
    };


    const handleChange = (text) =>{
        setInput(text)
        
        if(text.length > 2){
            fetchData(text)
        }
    }


    return (
        <View style={styles.SearchBack}>
            <TextInput 
                placeholder='Input Your Meal!' 
                value={input}
                style={styles.search}
                onChangeText={(text) => 
                     handleChange(text)
                }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBack: {
        backgroundColor: "white",
        width: "80%",
        paddingVertical: 8,
        paddingLeft: 5,
        borderRadius: 5,
        borderWidth: .7,
        borderColor: "#e8e8e8",

    }
})