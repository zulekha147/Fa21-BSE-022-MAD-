import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [inputNumber, setInputNumber] = useState('');

  const handleNumberPress = (number) => {
    setInputNumber(prevInput => prevInput + number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guessing Game</Text>
      <TextInput
        style={styles.input}
        value={inputNumber}
        placeholder="Enter a number"
        keyboardType="numeric"
        onChangeText={(text) => setInputNumber(text)}
      />
      <View style={styles.buttonContainer}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleNumberPress(String(number))}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
