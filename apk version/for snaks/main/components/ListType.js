import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

const ListItem = ({ types, filter, SETfilter }) => {
  return (
    <View style={styles.Types}>
      {types.map((e) => {
        return (
          <TouchableWithoutFeedback
            key={e.id}
            onPress={() => SETfilter(e.type)}
          >
            <View
              style={
                filter === e.type ? [styles.type, styles.selected] : styles.type
              }
            >
              <Text
                style={
                  filter === e.type
                    ? [styles.type_name, styles.selected_name]
                    : styles.type_name
                }
              >
                {e.type}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  Types: {
    width: "100%",
    height: "14%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  type: {
    height: "75%",
    backgroundColor: "#FF7072",
    display: "flex",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    marginHorizontal: 7,
    paddingHorizontal: 5,
  },
  selected: {
    backgroundColor: "rgba(255,255,255,.5)",
    borderColor: "#fff",
  },
  type_name: {
    fontSize: 20,
    color: "#fff",
  },
  selected_name: {
    color: "#000",
  },
});
