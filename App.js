import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginRegister from "./screens/LoginRegister";
import Register from "./screens/Register";
import Landing from "./screens/Landing";
import Email from "./screens/Email";
import Account from "./screens/Account";
import Dashboard from "./screens/Dashboard";
import Measure from "./screens/Measure";
import AgeGender from "./screens/AgeGender";

// Create a new stack navigator instance
const Stack = createNativeStackNavigator();

export default function App() {
  // Currently set as true for testing, replace with actual auth state
  const isSignedIn = true;

  return (
    // Wrap everything within a navigation container
    <NavigationContainer>
      {/* Initiate the stack navigator */}
      <Stack.Navigator>
        {/* Conditional rendering of screens based on sign-in state */}
        {isSignedIn ? (
          // User is signed in
          <>
            <Stack.Screen name="LoginRegister" component={LoginRegister} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="AgeGender" component={AgeGender} />
            <Stack.Screen name="Measure" component={Measure} />
          </>
        ) : (
          // User isn't signed in
          <>
            <Stack.Screen name="Landing" component={Landing} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
