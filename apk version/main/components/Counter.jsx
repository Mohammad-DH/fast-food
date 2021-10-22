import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { root } from "../context/API";

const Counter = ({ data }) => {
  const { cart, SETorders } = useContext(root);
  const item = cart.filter((obj) => obj.id === data.id);

  const [count, setcount] = useState(item[0] ? item[0].qty : 0);
  const countHandeler = (f) => {
    if (f > 0) {
      setcount(count + 1);
    } else {
      if (count > 0) {
        setcount(count - 1);
      }
    }
  };

  return (
    <View style={styles.Counter}>
      <View style={styles.control}>
        <TouchableOpacity onPress={() => countHandeler(1)}>
          <View style={styles.counterBox}>
            <Image
              source={require("../../assets/i.png")}
              style={styles.counterImage}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity onPress={() => countHandeler(-1)}>
          <View style={styles.counterBox}>
            <Image
              source={require("../../assets/d.png")}
              style={styles.counterImage}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => SETorders(data, count)}>
        <Text style={styles.add}>{item[0] ? "CHANGE" : "ADD TO CART"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  Counter: {
    position: "absolute",
    bottom: "-25vh",
    width: "90vw",
    height: "10vh",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  control: {
    width: "35%",
    height: "5vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  counterBox: {
    width: "4vh",
    height: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counterImage: {
    width: 15,
    height: 15,
  },
  count: {
    fontSize: 25,
    paddingHorizontal: 15,
  },
  add: {
    width: "90vw",
    alignSelf: "center",
    fontSize: 35,
    backgroundColor: "#FF7072",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 10,
  },
});
