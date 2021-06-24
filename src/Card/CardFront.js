import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Polygon, Rect, Circle } from "svgs";

import animals from "../constants/cards";
import { cardHeight, cardWidth } from "../constants/board";

const pointStyles = {
  width: 20,
  color: "#fff",
  fontSize: 14,
  fontWeight: "700",
  textAlign: "center",
  textShadowColor: "rgba(0,0,0,0.69)",
  textShadowRadius: 0,
  textShadowOffset: {
    width: 1,
    height: 1,
  },
};

const CardFront = ({ card, style }) => (
  <View style={[styles.root, style]}>
    <Svg
      width={cardWidth}
      height={cardHeight}
      xmlns="http://www.w3.org/2000/Svg"
      viewBox="0 0 100 140"
      
    >
     
      <Rect
        width={cardWidth} 
        height={cardHeight} 
        id="cardName"
        fill={animals[card.cardName] && animals[card.cardName].color}
        >
      </Rect>
    </Svg>
  </View>
);

CardFront.defaultProps = {
  card: {},
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  circleStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    
  },
});

export default CardFront;
