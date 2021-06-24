import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const Nameplate = ({ active, player, playerConfig, style, ...rest }) => (
  <Animatable.View
    style={[styles.root, active ? styles.active : styles.inactive, style]}
    transition={["opacity", "scaleX", "scaleY"]}
    {...rest}
  >
    <View
      style={[
        styles.name,
        {
          backgroundColor: playerConfig.color || "#9F9FB7",
        },
      ]}
    >
      <View>
        <ImageBackground style={{ width: 64, height: 64 }} source={require("../../assets/penguin.png")} />
      </View>

    </View>
    <View style={styles.details}>
      <Text style={styles.name}>{playerConfig.name}</Text>
      <Text style={styles.score}>Level 1</Text>
    </View>
  </Animatable.View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 44,
    borderColor: "#fff",
    borderWidth: 4,
    marginBottom: 4,
  },
  name: {
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  active: {},
  inactive: {
    opacity: 0.8,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  details: {
    width: 120,
    height: 80,
    justifyContent: "center",
    paddingLeft: 16,
  },
  name: {
    color: "#17171b",
    fontFamily: "Dimbo",
    fontSize: 24,
    lineHeight: 30,
    marginTop: 4, // The line-height on this font is funky, this visually centers it
  },
  score: {
    color: "#17171b",
    fontFamily: "Dimbo",
    fontSize: 48,
    lineHeight: 60,
    marginTop: -6, // The line-height on this font is funky, this visually centers it
  },
});

export default Nameplate;
