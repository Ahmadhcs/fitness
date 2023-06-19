import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import Register from "./Screens/Register";
import Landing from "./Screens/Landing";
import Email from "./Screens/Email";
import Account from "./Screens/Account";
import Dashboard from "./Screens/Dashboard";
import Measure from "./Screens/Measure";
import AgeGender from "./Screens/AgeGender";

const Stack = createNativeStackNavigator();

export default function App() {
  const isSignedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="AgeGender" component={AgeGender} />
            <Stack.Screen name="Measure" component={Measure} />
          </>
        ) : (
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
