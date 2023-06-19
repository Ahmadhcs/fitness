import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Email = ({ route }) => {
  const navigation = useNavigation();

  const name = route.params;

  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleEmail = () => {
    //Handle empty or not valid

    if (email !== confirm) {
      console.log("handle Error");
    } else {
      navigation.navigate("Account", { email, confirm });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.Titles}>
        <Text style={styles.title}>Hey {name}!</Text>
        <Text style={styles.title}>What is Your Email?</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          placeholder="Email Address"
          style={styles.textbox}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Confirm Email "
          style={styles.textbox}
          onChangeText={setConfirm}
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.cont} onPress={handleEmail}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: "30px",
    textAlign: "center",
    paddingLeft: 15,
  },
  cont: {
    backgroundColor: "blue",
    width: "80%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: "blue",
    marginVertical: 5,
  },
  textbox: {
    backgroundColor: "white",
    width: "80%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: "gray",
    marginVertical: 5,
  },
  main: {
    alignItems: "center",
    paddingBottom: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  Titles: {
    paddingVertical: 20,
    paddingBottom: 60,
  },
  buttonView: {
    alignItems: "center",
  },
});

export default Email;
