import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Mini_btn = ({ text, onpress, type }) => {
  return (
    <TouchableOpacity
      style={
        type === 1
          ? [styles.Mini_btn, styles.type1]
          : [styles.Mini_btn, styles.type2]
      }
      onPress={onpress}
    >
      <View style={styles.Mini_btn_view}>
        <Text
          style={
            type === 1
              ? [styles.Mini_btn_text, styles.text_type1]
              : [styles.Mini_btn_text, styles.text_type2]
          }
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Mini_btn;

const styles = StyleSheet.create({
  Mini_btn: {
    width: "40%",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
  },
  Mini_btn_view: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  Mini_btn_text: {
    fontSize: 25,
    alignSelf: "center",
  },
  type1: {
    backgroundColor: "#FF7072",
    borderColor: "#fff",
  },
  type2: {
    backgroundColor: "#fff",
    borderColor: "#FF7072",
  },
  text_type1: {
    color: "#fff",
  },
  text_type2: {
    color: "#FF7072",
  },
});
