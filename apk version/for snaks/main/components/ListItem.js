import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

const ListItem = ({ data, filter, navigation }) => {
  const [DATA, setDATA] = useState(data);

  useEffect(() => {
    if (filter === "all") {
      setDATA(data);
    } else {
      setDATA(data.filter((obj) => obj.type === filter));
    }
  }, [filter]);

  return (
    <View style={styles.Items}>
      {DATA.map((e) => {
        return (
          <TouchableWithoutFeedback
            key={e.id}
            onPress={() => navigation.navigate("Detail", e)}
          >
            <View key={e.id} style={styles.item}>
              <ImageBackground style={styles.item_image} source={e.image}>
                <View style={styles.item_overly}>
                  <Text style={styles.item_name}>{e.name}</Text>
                  <Text style={styles.item_price}>{e.price.toFixed(3)}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  Items: {
    width: "100%",
    height: "87%",
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
  },
  item: {
    height: "95%",
    width: "57vw",
    borderColor: "#FFF",
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: "center",
    overflow: "hidden",
  },
  item_image: {
    height: "100%",
    width: "60vw",
    resizeMode: "cover",
    borderWidth: 0,
    borderRadius: 15,
    justifyContent: "flex-end",
  },
  item_overly: {
    width: "100%",
    height: "25%",
    backgroundColor: "rgba(100,100,100,.5)",
    display: "flex",
    justifyContent: "center",
  },
  item_name: {
    top: "90%",
    color: "#fff",
    alignSelf: "center",
    fontSize: 22,
  },
  item_price: {
    top: "90%",
    color: "#fff",
    alignSelf: "center",
    fontSize: 22,
  },
});
