import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import Mini_btn from "../components/Mini_btn";
import SafeScreen from "../components/SafeScreen";

const Login = ({ navigation }) => {
  const [Name, onChangeName] = useState("");
  const [Number, onChangeNumber] = useState("");
  return (
    <SafeScreen>
      <View style={styles.test}>
        <View style={styles.test2}></View>
        <Image
          source={require("../../assets/welcome.png")}
          style={styles.welcome}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder="Name"
          value={Name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder="Number"
          value={Number}
        />
        <View style={styles.BTNs}>
          <Mini_btn
            text={"later"}
            type={2}
            onpress={() => navigation.navigate("Home")}
          />
          <Mini_btn
            text={"sign in"}
            type={1}
            onpress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  test: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#82D9FF",
  },
  test2: {
    top: "-30%",
    alignSelf: "center",
    width: 500,
    height: 500,
    backgroundColor: "#F7FF80",
    borderRadius: 500,
  },
  welcome: {
    position: "absolute",
    top: "20%",
    alignSelf: "center",
    width: "85%",
    height: "11%",
    zIndex: 10,
    resizeMode: "contain",
  },
  input: {
    width: "80%",
    position: "relative",
    top: 0,
    borderWidth: 2,
    borderColor: "#00B1FF",
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  BTNs: {
    position: "absolute",
    bottom: 5,
    width: "90%",
    height: "7%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});
