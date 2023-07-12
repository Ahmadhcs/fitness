import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

const LIST_ITEM_HEIGHT = 50;
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

function ExerciseCard({ data, onDelete }) {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withSpring(-SCREEN_WIDTH);
        runOnJS(onDelete)();
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    };
  });

  return (
    <Animated.View style={styles.taskContainer}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <Feather name={"trash-2"} size={LIST_ITEM_HEIGHT * 0.4} color={"red"} />
      </Animated.View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.task, rStyle]}>
          <Text style={styles.taskTitle}>{data}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  task: {
    width: "100%",
    height: LIST_ITEM_HEIGHT,
    justifyContent: "center",
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 10,
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  taskTitle: {
    fontSize: 16,
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
  },
});

export default ExerciseCard;
