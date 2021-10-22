import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

function SafeScreen({ children }) {
  return <View style={styles.View}>{children}</View>;
}
const styles = StyleSheet.create({
  View: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default SafeScreen;
