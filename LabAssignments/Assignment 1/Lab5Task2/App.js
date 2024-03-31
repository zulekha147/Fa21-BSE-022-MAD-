import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
    setSubmitDisabled(text === '' || password === '');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setSubmitDisabled(text === '' || username === '');
  };

  const handleLogin = () => {
    if (username === 'cspeople' && password === 'zuli') {
      Alert.alert('Success', 'Login Successful');
    } else {
      Alert.alert('Error', 'Wrong username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: submitDisabled ? 'gray' : '#007bff' }]}
        onPress={handleLogin}
        disabled={submitDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

export default App;
