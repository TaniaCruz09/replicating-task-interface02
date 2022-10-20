import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>Hey, brytten</Text>
      <Image
        style={styles.imgHeader}
        source={require("../../images/persona.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 45,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 35,
    fontWeight: "bold",
  },
  imgHeader: {
    width: "15%",
    height: "120%",
    borderRadius: 10,
  },
});
