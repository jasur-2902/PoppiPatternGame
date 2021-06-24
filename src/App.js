// Importing React Components 
import React, { Component } from "react";

// Importing React Native Components 
import { Platform, StatusBar, StyleSheet, View, YellowBox } from "react-native";
import { Client } from "boardgame.io/react-native";

// Importing custom components 
import Board from "./Matchimals";
import Game from "./Game";
import MainMenu from "./MainMenu";

// Additional assests 
import colors from "./constants/colors";

// Main clas which contains the game 
class App extends Component {

  // State of the application 
  state = {
    isMainMenuVisible: false, // By Default Main menu is visible
    
    // Left top corner of the game, Nameplate parametrs  
    playerConfig: {
      "0": {
        name: "Help Poppi",
        color: colors.greenLight,
      },
    },
  };

  // When User clicks the start game it makese main menu invisible, 
  // by default when game starts Main Menu is visible 
  startGame = () => {
    this.setState({
      isMainMenuVisible: false,
    });
  };

  // Function that brings user back to main menu 
  backToMainMenu = () => {
    // changes MainMenu State to visible. 
    this.setState({
      isMainMenuVisible: true,
    });
  };

  // Rendering the game 
  render() {
    const { isMainMenuVisible, playerConfig } = this.state;
    
    let GameClient = Client({
      board: Board,
      game: Game,
      debug: false,
    });

    // Creating the game view 
    return (
        <View style={styles.root}>
          {/* hidding the status bar on Android and IOS phones */}
          <StatusBar hidden />
          
          {/* If Main menu state is true that show Main Menu Component */}
          {isMainMenuVisible ? (
            <MainMenu
              startGame={this.startGame}
            />
          ) : ( 
            // Column means else, if Main menu state is false, then show the Game Interface. 
            <GameClient
              backToMainMenu={this.backToMainMenu}
              playerConfig={playerConfig}
            />
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
    height: Platform.OS === "web" ? "100vh" : "100%",
    overflow: "hidden",
    backgroundColor: colors.grayDark,
  },
});

export default App;
