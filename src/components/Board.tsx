import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Dimensions, View, Text } from "react-native";
import Square from "./Square";
import Snackbar from 'react-native-snackbar';

const boardSize = Dimensions.get("window").width - 25;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winMessage, setWinMessage] = useState("")
  let winner = calculateWinner(squares);

  const handlePress = (i) => {
    const squaresCopy = [...squares];
    if (winner || squaresCopy[i]) {
      if(winner) {
        return Snackbar.show({
          text: winMessage,
          backgroundColor: '#000000',
          textColor: '#FFFFFF'
        })
      }
      return;
    }

    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXisNext(!xIsNext);
  };

  const reloadGame = () => {
    setXisNext(true)
    setWinMessage('')
    squares.fill('',0,9)
    winner = !winner;
    console.log('winner:', winner);
    console.log('squares:', squares);
  }

  useEffect(() => {
    if (winner) {
      setWinMessage(`Player  ${winner} won`)
    } else {
      setWinMessage("")
    }
  }, [squares]);

  let generateSquare = (i) => {
    return (
      <Square position={i} value={squares[i]} onPress={() => handlePress(i)} />
    );
  };

  return (
    <>
      <View style={styles.board}>
        <View style={styles.boardRow}>
          {generateSquare(0)}
          {generateSquare(1)}
          {generateSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {generateSquare(3)}
          {generateSquare(4)}
          {generateSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {generateSquare(6)}
          {generateSquare(7)}
          {generateSquare(8)}
        </View>
      </View>
      {!winner 
        ?
        (
          <Text style={styles.message}>
            It's Player {xIsNext ? "X" : "O"}'s Turn!
          </Text>
        ) : (
        <View>
          <Text style={styles.message}>{winMessage}</Text>
          
          <View style={[{ width: "90%", margin: 10, borderRadius: 5, backgroundColor: "blue" }]}>
          <Button
            onPress={reloadGame}
            title="Reload Game"
            color="white"
            style={[{borderRadius: 5,}]}
          />
        </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  board: {
    width: boardSize,
    height: boardSize,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    padding: 10,
    justifyContent: "space-between",
  },
  boardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  message: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Board;
