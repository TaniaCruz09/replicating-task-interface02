import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Galery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Hey, brytten</Text>
        <Image
          style={styles.imgHeader}
          source={require("../../images/pochita.jpg")}
        />
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.imgBody}
          source={require("../../images/first.jpg")}
        />
        <Image
          style={styles.imgBody}
          source={require("../../images/second.jpg")}
        />
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.imgBody}
          source={require("../../images/third.jpg")}
        />
        <Image
          style={styles.imgBody}
          source={require("../../images/fourth.jpg")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 35,
    fontWeight: "bold",
  },
  imgHeader: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  containerBody: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "center",
  },
  imgBody: {
    marginHorizontal: 10,
    width: 180,
    height: 180,
    borderRadius: 20,
    marginVertical: 20,
  },
});
