import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Name = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleName = () => {
    navigation.navigate("Gender");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              {/* Progress bar */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={styles.progress} />
                </View>
                <Text style={styles.progressText}>X of X</Text>
              </View>

              {/* Back button */}
              <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>&lt; Back</Text>
              </Pressable>

              {/* Prompt */}
              <View style={styles.Titles}>
                <Text autoCorrect={false} style={styles.title}>
                  What's Your Name?
                </Text>
              </View>
            </View>

            {/* Content */}
            <View style={styles.content}>
              {/* Name input */}
              <View style={styles.main}>
                <TextInput
                  placeholder="Full Name"
                  style={styles.textbox}
                  onChangeText={setName}
                  autoFocus={true}
                />
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              {/* Continue button */}
              <View style={styles.buttonView}>
                <Pressable style={styles.cont} onPress={handleName}>
                  <Text style={styles.text}>Continue</Text>
                </Pressable>
              </View>
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
  header: {
    flex: 1,
    justifyContent: "flex-start",
  },
  content: {
    flex: 2,
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    paddingLeft: 15,
    paddingTop: 10,
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
    alignSelf: "center",
    marginVertical: 5,
  },
  main: {
    width: "100%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  Titles: {
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

export default Name;
