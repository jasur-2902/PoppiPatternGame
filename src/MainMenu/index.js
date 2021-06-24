import React from "react";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../constants/colors";
import Button from "../Button";

const Menu = ({ startGame }) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={require("../../assets/trianglify.png")} style={styles.root}>
        <>
          <Text style={styles.text}>SELECT LEVEL</Text>
          <Button
            style={styles.button}
          >
            LEVEL 1
          </Button>
          <Button
            style={styles.button}
          >
            LEVEL 2
          </Button>
          <Button
            style={styles.button}
          >
            LEVEL 3
          </Button>
          <Button
            style={styles.button}
          >
            LEVEL 4
          </Button>

          <Button
            color={colors.yellowLight}
            onPress={startGame}
            style={{ marginTop: 24 }}
          >
            START GAME
          </Button>
        </>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 8,
  },
  active: {
    borderColor: "blue",
  },
  text: {
    color: colors.grayDark,
    fontFamily: "Dimbo",
    fontSize: 48,
    lineHeight: 60,
    marginBottom: 32,
  },
});

export default Menu;
