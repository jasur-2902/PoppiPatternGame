import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { cardHeight, cardWidth } from "../constants/board";

const CardBack = ({ height, style, width }) => (
  <View style={[styles.root, style]}>
    <ImageBackground source={require("./card-back.png")} style={styles.root}>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  root: {
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
});

export default CardBack;
