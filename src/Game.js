// Importing BBGame library from boardgame.io 
import { Game as BGGame } from "boardgame.io/core";

import shuffle from "lodash/shuffle";

import { cells as emptyCells, center, center2, center3, getCardLocation } from "./constants/board";
import { levelOne as DECK, getRandomCard } from "./constants/levels";

// Check if you can place the card
export function isLegalMove(G, ctx, id) {
  if (G.cells[id] !== null) {
    return true;
  }

  // !!! Write the code which will ensure that user's move is legal 

  return true; //Return false if there are no neighboring cards that match
}


function canCardsConnect(card1, card2) {

  if (
    card1.right === card2.left
  ) {
    return true;
  }

  return false;
}


export function getInitialState(ctx) {

  const G = {
    cells: [],
    deck: [],
    players: [],
  };

  // Add a deck for every player
  for (let i = 0; i < 1; i++) {
    G.deck = G.deck.concat(DECK); 
  }

  // Shuffle resulting deck using lodash
  G.deck = shuffle(G.deck); // TODO: Use boardgame.io provided random shuffle function, which will be important when we are running a server

  // Set up the game state for each player
  G.players[0] = {
     score: 0,
  };


  // Fill the game board
  G.cells = emptyCells;

  let pattern = [];

  let patternSize = 3; 


  for(let i = 0; i<patternSize; i++){
    // Set the initial card on the board
    pattern.push(getRandomCard(DECK));
  }
  
  for(let i = 0; i<2; i++){
    for(let j = pattern.length-1; j>=0; j--){
      G.cells[getCardLocation()] = pattern[j];
    }
  } 


  G.cells[getCardLocation()] = "cardSlot"


  console.log("Initial Game State", G, "Initial ctx", ctx);

  // Our game state is ready to go– return it!
  return G;
}

// Game object, its inheriting BGGame object, which library for 2D games in React Native 
const Game = BGGame({ // Documentation for BGGame - https://boardgame.io/documentation/#/

  // The setup method is passed ctx
  setup: getInitialState,
  moves: {
    // G and ctx are provided automatically when calling from App– `this.props.moves.placeCard(id)`
    placeCard: (G, ctx, id) => {
      // Ensure we can't overwrite cells.
     
        //Lay the card on the board
        G.cells[id] = G.deck[0];
        //G.players[ctx.currentPlayer].score += calculateScore(G, ctx, id);

        //Next card shifts up the deck
        
        console.log(id);

        G.deck.shift()
        //G.deck.splice(1);

        

      // Return the updated game state- because G is an Immer object we can mutate it directly
      return G;
    },

    pass: (G, ctx) => {
      // Place top card to bottom of deck
      //G.deck.push(G.deck.shift());

      // Return the updated game state- because G is an Immer object we can mutate it directly
      return G;
    },
  },

  flow: {
    // endGameIf: (G, ctx) => {
    //   if (G.deck.length === 3) {
    //     const winner = Object.keys(G.players).reduce(
    //       (previousPlayer, currentPlayer) =>
    //         G.players[previousPlayer].score > G.players[currentPlayer].score
    //           ? previousPlayer
    //           : currentPlayer
    //     );
    //     return winner;
    //   }
    // },
    movesPerTurn: 1,
  },
});

export default Game;
