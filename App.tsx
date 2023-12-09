import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Microphone from "./components/Microphone";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Microphone />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
