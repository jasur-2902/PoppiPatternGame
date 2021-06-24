import React from "react";
import { StyleSheet, View } from "react-native";

import Card from "../Card";

const Deck = ({ cards, onCardDrop, style, ...rest }) => (
  <View style={[styles.root, style]} {...rest}>
    {cards.map((card, i) => {

      return (
        <Card
          key={i}
          card={card}
          onCardDrop={onCardDrop}
          // flipped={i === 2}
          style={{
            position: "absolute",
            //left: i === 0 ? 0 : i * 4 +200,
            left: i*105,
            top: 0,
          }}
          //disabled={i !== 0}
          flipped
        />
      );
    })}
  </View>
);

Deck.defaultProps = {
  cards: [],
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
  },
});

export default Deck;
