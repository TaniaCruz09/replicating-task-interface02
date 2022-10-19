import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface Props {
  direction: {};
  text: string;
}

export const InfoBoxes = (props: Props) => {
  return (
    <TouchableOpacity style={styles.imgBody}>
      <ImageBackground
        source={props.direction}
        resizeMode="cover"
        style={styles.boxesOfGalery}
        imageStyle={{ borderRadius: 20 }}
      >
        <Text style={styles.textIntoBoxes}>{props.text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgBody: {
    backgroundColor: "orange",
    width: "41%",
    height: "45%",
    borderRadius: 20,
    marginBottom: 40,
  },
  boxesOfGalery: {
    flex: 1,
    borderRadius: 100,
  },
  textIntoBoxes: {
    color: "white",
    fontSize: 19,
    marginHorizontal: 20,
    position: "absolute",
    top: 100,
  },
});
