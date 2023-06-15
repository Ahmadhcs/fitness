import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React from 'react'

const SearchFilter = ({data, input, setInput}) => {
  return (
    <View style={styles.filter}>
      <FlatList data={data} renderItem={({item}) =>{

        // <Pressable > 
        //     <Text>{item[0].title}</Text>
        // </Pressable> 

        if(input == ""){
            return(
                <Text></Text>
            )
        }

        return(
            <Pressable style={styles.press} onPress={() => setInput("")}>
                <Text style={styles.output}>{item.title}</Text>
            </Pressable>
        )

      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    filter:{
       
    },
    output:{
       
    },
    press: {
        backgroundColor: "white",
        width: "80%",
        borderRadius: 5,
        borderWidth: .7,
        borderColor: "#e8e8e8",


    }
})

export default SearchFilter