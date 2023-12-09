import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import React, { useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const Microphone = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const micScale = useSharedValue(0);
  const micOpacity = useSharedValue(0);

  const handlePress = () => {
    if (playing) {
      setPlaying(false);
      micOpacity.value = 0;
      micScale.value = 0;
    } else {
      setPlaying(true);
      micScale.value = withRepeat(
        withTiming(1, {
          duration: 1000,
        }),
        -1
      );
      micOpacity.value = withRepeat(
        withTiming(1, {
          duration: 1000,
        }),
        -1
      );
    }
  };

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(micScale.value, [0.3, 0.6, 1], [1.3, 1.6, 1.8]) },
      ],
      opacity: interpolate(micOpacity.value, [0, 0.5, 1], [0.5, 1, 0]),
    };
  });

  return (
    <View>
      <TouchableOpacity style={styles.micBtn} onPress={handlePress}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            styles.micBtn,
            animatedButtonStyle,
          ]}
        />
        <FontAwesome
          name={playing ? "stop" : "microphone"}
          size={35}
          color={"white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Microphone;

const styles = StyleSheet.create({
  micBtn: {
    backgroundColor: "royalblue",
    flexDirection: "column",
    borderRadius: 999,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
