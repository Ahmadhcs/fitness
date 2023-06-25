import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Spacer */}
      <View style={styles.spacer} />
      {/* Logo */}
      {/* Welcome text */}
      <Text style={styles.welcomeText}>Welcome to Fitness</Text>
      {/* Subtext */}
      <Text style={styles.subText}>
        Take your fitness journey to the next level
      </Text>
      {/* Spacer */}
      <View style={styles.spacer} />
      {/* Sign up with Apple ID button */}
      {/* Still not set up */}
      <Pressable style={styles.appleButton}>
        <Text style={styles.appleText}>Apple</Text>
      </Pressable>
      {/* Sign up button */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Name")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      {/* Log in text */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Log in
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "lightblue",
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },
  spacer: {
    flex: 1,
  },
  appleButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  appleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loginText: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
  },
  loginLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default HomeScreen;
