import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import CartItem from "../components/cartItem";
import SafeScreen from "../components/SafeScreen";
import { root } from "../context/API";

const Cart = ({ navigation }) => {
  const { cart, total } = useContext(root);

  return (
    <SafeScreen>
      <View style={styles.Cart}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.back}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.header_text}>CART</Text>
        </View>

        <FlatList
          style={styles.list}
          data={cart}
          renderItem={({ item }) => {
            return <CartItem item={item} navigation={navigation} />;
          }}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity style={styles.btnBox}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              {total > 0 ? `PAY ${total},000` : "cart is empty"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
};

export default Cart;

const styles = StyleSheet.create({
  Cart: {
    backgroundColor: "#F7FF80",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    width: "97%",
    height: "7vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  back: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    zIndex: 10,
  },
  header_text: {
    fontSize: 30,
    color: "#82D9FF",
    marginRight: 10,
  },
  box: {},
  list: {
    width: "100%",
    height: "83vh",
  },
  btnBox: {
    width: "100%",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "90%",
    height: "80%",
    backgroundColor: "#FF7072",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 35,
    color: "#fff",
  },
});
