import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import drinks from "../../assets/drinks.png";
import hamburger from "../../assets/hamburger.png";
import pizza from "../../assets/pizza.png";

const CartItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cartItem}
      onPress={() => navigation.navigate("Detail", item)}
    >
      <View style={styles.bigbox}>
        <Image
          style={styles.image}
          source={
            item.type === "drinks"
              ? drinks
              : item.type === "hamburger"
              ? hamburger
              : pizza
          }
        />
        <View style={styles.box}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price.toFixed(3)}</Text>
        </View>
      </View>

      <Text style={styles.qty}>{item.qty}</Text>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    width: "95%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginVertical: 9,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#fff",
    backgroundColor: "#82D9FF",
  },
  bigbox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  box: {
    width: "auto",
    height: "100%",
    alignSelf: "center",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  name: {
    textAlign: "left",
    fontSize: 25,
    marginBottom: 5,
    marginTop: -5,
  },
  price: {
    fontSize: 18,
    marginLeft: 15,
  },
  qty: {
    fontSize: 20,
    alignSelf: "center",
    marginRight: 10,
  },
});
