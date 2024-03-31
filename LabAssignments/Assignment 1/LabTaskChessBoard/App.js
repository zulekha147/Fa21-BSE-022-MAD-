import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chessboard: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 50,
    height: 50,
    borderWidth: 1,
  },
});

const Chessboard = () => {
  const board = [];
  // Initialize with alternating colors for each square
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const color = (i + j) % 2 === 0 ? 'white' : 'black';
      row.push({ color });
    }
    board.push(row);
  }

  return (
    <View style={styles.chessboard}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((square, colIndex) => (
            <View
              key={`${rowIndex}-${colIndex}`}
              style={[styles.square, { backgroundColor: square.color }]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Chessboard />
    </View>
  );
};

export default App;
