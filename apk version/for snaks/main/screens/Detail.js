import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Counter from "../components/Counter";
import SafeScreen from "../components/SafeScreen";

const Detail = ({ route, navigation }) => {
  const { id, type, name, price } = route.params;
  return (
    <SafeScreen>
      <View style={styles.Detail}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require("../../assets/back.png")}
          />
        </TouchableWithoutFeedback>
        <View style={styles.circle}></View>
        <Image
          style={styles.image}
          source={require(`../../assets/foods/m1.jpg`)}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price.toFixed(3)}</Text>
          <Counter data={route.params} />
        </View>
      </View>
    </SafeScreen>
  );
};

export default Detail;

const styles = StyleSheet.create({
  Detail: {
    width: "100%",
    height: "100%",
    backgroundColor: "#82D9FF",
  },
  back: {
    top: "1%",
    left: "2%",
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    zIndex: 10,
  },
  circle: {
    alignSelf: "flex-end",
    position: "absolute",
    top: "-45%",
    left: "-20%",
    width: "100vh",
    height: "100vh",
    backgroundColor: "#F7FF80",
    borderRadius: 500,
    zIndex: -5,
  },
  image: {
    position: "absolute",
    width: "65vh",
    height: "65vh",
    top: "-13%",
    right: "-60%",
    resizeMode: "cover",
    backgroundColor: "#F7FF80",
    borderRadius: 500,
  },
  info: {
    position: "absolute",
    bottom: "30%",
    left: "5%",
  },
  name: {
    fontSize: 35,
    marginBottom: 10,
  },
  price: {
    fontSize: 28,
  },
  counter: {
    width: "100vw",
    height: "100%",
    position: "absolute",
    bottom: "-150%",
    backgroundColor: "blue",
  },
});
