import React from "react";
import { StyleSheet, View } from "react-native";

import Card from "../Card";
import CardSlot from "../CardSlot"
import {
  boardHeight,
  boardWidth,
  cardHeight,
  cardWidth,
  columns,
  rows,
} from "../constants/board";

const Board = ({ G }) => {
  let cells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const id = columns * i + j;
      const value = G.cells[id];
      //console.log(value)
    
      
     //   console.log("Id outside" + id); 

        if(value == "cardSlot"){
          cells.push(
          <View key={id} id={id} style={styles.cell}>
          {<CardSlot disabled />}
          </View>);
        }
        else{
        cells.push(
          <View key={id} id={id} style={styles.cell}>
            {value && <Card card={value} flipped disabled />}
          </View>
        );
    }
      
      
    }
  }
  

  
  return <View style={styles.root} >{cells}</View>;
};

const styles = StyleSheet.create({
  root: {
    width: boardWidth,
    height: boardHeight,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    marginRight:2,
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Board;
