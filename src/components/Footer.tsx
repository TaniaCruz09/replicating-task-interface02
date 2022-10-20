import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View style={styles.containerFooter}>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="pluscircle" size={50} color="#FFB890" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="credit-card-check-outline"
          size={30}
          color="grey"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFooter: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
