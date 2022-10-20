import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { InfoBoxes } from "../components/InfoBoxes";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Galery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />

      <View style={styles.containerBody}>
        <InfoBoxes
          direction={require("../../images/first.jpg")}
          text={`Daily \nExplotion`}
        />
        <InfoBoxes
          direction={require("../../images/second.jpg")}
          text={"Residential \nUpgrading"}
        />
        <InfoBoxes
          direction={require("../../images/third.jpg")}
          text={"Life \nDevelopment"}
        />
        <InfoBoxes
          direction={require("../../images/fourth.jpg")}
          text={"Family \nmanagement"}
        />
      </View>
      <View style={styles.containerTextMedium}>
        <Text style={styles.textMedium}>Guess you like it</Text>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          style={styles.imgFrutas}
          source={require("../../images/naranjas.jpg")}
        />
        <Image
          style={styles.imgFrutas}
          source={require("../../images/bananas.jpg")}
        />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    height: "45%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignContent: "space-between",
  },

  containerTextMedium: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 18,
  },
  textMedium: {
    fontSize: 33,
    fontWeight: "bold",
  },
  scrollView: {
    height: "16%",
    marginLeft: 20,
  },
  imgFrutas: {
    width: 300,
    marginHorizontal: 10,
    height: 150,
    borderRadius: 20,
  },
});
