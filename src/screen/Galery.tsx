import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InfoBoxes } from "../components/InfoBoxes";

export const Galery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Hey, brytten</Text>
        <Image
          style={styles.imgHeader}
          source={require("../../images/persona.jpg")}
        />
      </View>
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
      <View style={styles.containerFrutas}>
        <Image
          style={styles.imgFrutas}
          source={require("../../images/naranjas.jpg")}
        />
        <Image
          style={styles.imgFrutas}
          source={require("../../images/bananas.jpg")}
        />
      </View>
      <View style={styles.containerFooter}>
        <Text>Home</Text>
        <AntDesign name="pluscircle" size={50} color="#FFB890" />
        <MaterialCommunityIcons
          name="credit-card-check-outline"
          size={30}
          color="grey"
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
    marginVertical: 45,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 35,
    fontWeight: "bold",
    // fontFamily: "M Ying Hei PRC W48 W7",
  },
  imgHeader: {
    width: "15%",
    height: "120%",
    borderRadius: 10,
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
  containerFrutas: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "17%",
  },
  imgFrutas: {
    width: "65%",
    height: "100%",
    borderRadius: 20,
    marginLeft: 30,
  },
  containerFooter: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
