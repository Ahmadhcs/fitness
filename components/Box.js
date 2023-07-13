import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  Animated,
  Easing,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Boxes = ({ newBoxes, handleGoToWorkoutView, deleteBox }) => {
  const [longPressIndex, setLongPressIndex] = useState(null);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const onLongPress = (index) => {
    if (longPressIndex === index) {
      shakeAnimation.stopAnimation();
      setLongPressIndex(null);
    } else {
      startShake();
      setLongPressIndex(index);
      Alert.alert("Delete Workout", "Are you sure you want to delete this workout?", [
        {
          text: "Cancel",
          onPress: () => {
            setLongPressIndex(null);
            shakeAnimation.setValue(0);
            shakeAnimation.stopAnimation();
          },
        },
        {
          text: "OK",
          onPress: () => {
            deleteBox(index);
            setLongPressIndex(null);
            shakeAnimation.stopAnimation();
          },
        },
      ]);
    }
  };

  const startShake = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.listContainer}>
      {newBoxes.length === 0 && (
        <Text style={styles.noWorkoutsText}>
          You have no workouts, create a new template or generate one!
        </Text>
      )}
      {newBoxes.map((box, index) => {
        const isLongPress = longPressIndex === index;
        const isLastBox = newBoxes.length % 2 !== 0 && index === newBoxes.length - 1;
        const containerStyle = isLastBox
          ? [styles.oddBoxContainer, isLongPress ? styles.boxLongPress : null]
          : [styles.evenBoxContainer, isLongPress ? styles.boxLongPress : null];

        return (
          <TouchableOpacity
            style={containerStyle}
            onPress={() => handleGoToWorkoutView(box)}
            onLongPress={() => onLongPress(index)}
            delayLongPress={1000}
            key={index}>
            <Animated.View
              style={{
                transform: [{ translateX: shakeAnimation }],
                justifyContent: "center",
                alignItems: "center",
              }}>
              {!isLongPress && <Text style={styles.boxText}>{box}</Text>}
              {isLongPress && <Feather name="trash-2" size={80} color="#fff" />}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "center",
    marginBottom: 10,
  },
  evenBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "46%",
    aspectRatio: 1,
    margin: "2%",
    borderRadius: 12,
  },
  oddBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "96%",
    aspectRatio: 2,
    margin: "2%",
    borderRadius: 12,
  },
  boxLongPress: {
    backgroundColor: "red",
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Boxes;
