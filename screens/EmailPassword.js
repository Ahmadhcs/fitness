import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const EmailPassword = ({ route }) => {
  const navigation = useNavigation();

  // Parameters and state variables
  const name = route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleCredentials = () => {
    navigation.navigate("AgeGender", { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {/* Progress bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progress} />
              </View>
              <Text style={styles.progressText}>1 of 4</Text>
            </View>

            {/* Back button */}
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>&lt; Back</Text>
            </Pressable>

            {/* Prompt */}
            <View style={styles.Titles}>
              <Text style={styles.title}>Hey {name}!</Text>
              <Text style={styles.title}>What's Your Email?</Text>
            </View>

            {/* Email input */}
            <View style={styles.main}>
              <TextInput
                placeholder="Email Address"
                style={styles.textbox}
                onChangeText={setEmail}
                autoFocus={true}
              />
              <TextInput
                placeholder="Password"
                style={styles.textbox}
                onChangeText={setPassword}
              />
            </View>

            {/* Continue button */}
            <View style={styles.buttonView}>
              <Pressable style={styles.cont} onPress={handleCredentials}>
                <Text style={styles.text}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    paddingLeft: 15,
    paddingTop: 20,
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
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  Titles: {
    paddingVertical: 20,
    paddingBottom: 20,
  },
  buttonView: {
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  progressBar: {
    backgroundColor: "lightgrey",
    height: 10,
    width: Dimensions.get("window").width - 90,
    borderRadius: 5,
    marginRight: 10,
  },
  progress: {
    height: "100%",
    width: `${(1 / 4) * 100}%`,
    borderRadius: 5,
    backgroundColor: "blue",
  },
  progressText: {},
});

export default EmailPassword;
