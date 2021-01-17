import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Board from "../components/Board";
import Screen from "../components/Screen";

function GameScreen(props) {
  return (
    <Screen>
      <ImageBackground
        style={stlyes.background}
        source={require("../images/gamebg.jpg")}
      >
        <Board />
      </ImageBackground>
    </Screen>
  );
}

const stlyes = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
