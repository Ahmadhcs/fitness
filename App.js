import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthProvider } from "./context/auth";

// Screens
import LoginRegister from "./screens/LoginRegister";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/Navbar";
import Weight from "./screens/Weight";
import Nutrition from "./screens/Nutrition";
import InputWeight from "./screens/InputWeight";
import Reco from "./screens/Reco";
import LogMeal from "./screens/LogMeal";
import GeneratedMeals from "./screens/GeneratedMeals";
// Sign Up Process
import Name from "./screens/signupProcess/Name";
import Credentials from "./screens/signupProcess/Credentials";
import Metrics from "./screens/signupProcess/Metrics";
import Gender from "./screens/signupProcess/Gender";
import Age from "./screens/signupProcess/Age";
import Loading from "./screens/Loading";
import GeneratedWorkout from "./screens/workout/GeneratedWorkout";

// Workout Manager
import WorkoutManager from "./screens/workout/WorkoutManager";

// New Changes
import AddWorkout from "./screens/workout/AddWorkout";

const withNavbar = (Component) => {
  return (props) => (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <Component {...props} />
      <Navbar navigation={props.navigation} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  // Currently set as true for testing, replace with actual auth state
  const isSignedIn = true;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Conditional rendering of screens based on sign-in state */}
            {isSignedIn ? (
              // User is signed in
              <>
                <Stack.Screen name="LoginRegister" component={LoginRegister} />
                {/* Sign Up Process */}
                <Stack.Screen name="Name" component={Name} />
                <Stack.Screen name="Gender" component={Gender} />
                <Stack.Screen name="Age" component={Age} />
                <Stack.Screen name="Metrics" component={Metrics} />
                <Stack.Screen name="Credentials" component={Credentials} />
                <Stack.Screen name="Dashboard" component={withNavbar(Dashboard)} />
                <Stack.Screen name="WorkoutManager" component={WorkoutManager} />
                <Stack.Screen name="Weight" component={withNavbar(Weight)} />
                <Stack.Screen name="Nutrition" component={withNavbar(Nutrition)} />

                {/* dont add navbar */}
                <Stack.Screen name="InputWeight" component={InputWeight} />
                <Stack.Screen name="Reco" component={Reco} />
                <Stack.Screen name="LogMeal" component={LogMeal} />
                <Stack.Screen name="GeneratedMeals" component={GeneratedMeals} />
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="GeneratedWorkout" component={GeneratedWorkout} />

                {/* New CHanges */}
                <Stack.Screen name="AddWorkout" component={AddWorkout} />
              </>
            ) : (
              // User isn't signed in
              <>
                <Stack.Screen name="LoginRegister" component={LoginRegister} />
                <Stack.Screen name="Name" component={Name} />
                <Stack.Screen name="Gender" component={Gender} />
                <Stack.Screen name="Age" component={Age} />
                <Stack.Screen name="Metrics" component={Metrics} />
                <Stack.Screen name="Credentials" component={Credentials} />
              </>
            )}
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
