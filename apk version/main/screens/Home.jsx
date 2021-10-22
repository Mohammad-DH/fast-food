import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";
import ListType from "../components/ListType";
import SafeScreen from "../components/SafeScreen";

import { root } from "../context/API";

const Home = ({ navigation }) => {
  const { data, types, filter, SETfilter, total, count } = useContext(root);
  return (
    <SafeScreen>
      <View style={styles.home}>
        <Image
          style={styles.header}
          source={require("../../assets/header.png")}
        />
        <View style={styles.circle}></View>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search" />
          <TouchableOpacity style={styles.search_btn}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.search_btnImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.cartBox}>
            <Image
              style={styles.cartBasket}
              source={require("../../assets/basket.png")}
            />
            <Text style={styles.cartCount}>{count}</Text>
          </View>
          <Text style={styles.cartTotal}>{total}$</Text>
        </TouchableOpacity>
        <View style={styles.list}>
          <ListType types={types} filter={filter} SETfilter={SETfilter} />
          <ListItem data={data} filter={filter} navigation={navigation} />
        </View>
      </View>
    </SafeScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    width: "100%",
    height: "100%",
    backgroundColor: "#82D9FF",
  },
  header: {
    alignSelf: "flex-start",
    position: "absolute",
    top: "2%",
    marginLeft: "10%",
    width: "70%",
    height: "25%",
    resizeMode: "contain",
  },
  circle: {
    position: "absolute",
    alignSelf: "center",
    top: "27%",
    left: "-40%",
    width: 900,
    height: 900,
    backgroundColor: "#F7FF80",
    borderRadius: 500,
  },
  search: {
    width: "100%",
    height: 50,
    top: "33%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  input: {
    width: "79%",
    height: "100%",
    borderColor: "#00B1FF",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 5,
    fontSize: 25,
  },
  search_btn: {
    width: 50,
    height: 50,
    borderColor: "#00B1FF",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  search_btnImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  cart: {
    top: "35%",
    height: 50,
    width: "95vw",
    backgroundColor: "#FF7072",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartBox: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartBasket: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginLeft: 10,
  },
  cartCount: {
    fontSize: 25,
    color: "#fff",
  },
  cartTotal: {
    fontSize: 25,
    marginRight: 10,
    color: "#fff",
  },
  list: {
    top: "37%",
    left: "2%",
    width: "100%",
    height: "48vh",
    backgroundColor: "#FF7072",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 10,
    paddingLeft: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
