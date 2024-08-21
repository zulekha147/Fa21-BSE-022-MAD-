import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [GPA, setGPA] = useState('');
  const [students, setStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleName = (name) => {
    if (name.trim().length === 0) {
      Alert.alert("Enter Valid Name");
      return false;
    }
    return true;
  }

  const handleGPA = (GPA) => {
    if (isNaN(GPA)) {
      Alert.alert('GPA must be a number');
      return false;
    }
    if (GPA < 0) {
      Alert.alert('GPA must be a positive number');
      return false;
    }
    if (GPA > 4) {
      Alert.alert('GPA cannot be greater than 4');
      return false;
    }
    return true;
  }

  const handleAddStudent = () => {
    if (!handleName(name) || !handleGPA(GPA)) {
      return;
    }
    const newStudent = { name, GPA };
    setStudents([...students, newStudent]);
    setName('');
    setGPA('');
  }

  const handleClear = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  }

  const handleClearAll = () => {
    setStudents([]);
    setSearchResults([]);
    setName('');
    setGPA('');
  }

  const handleSearchByName = () => {
    const results = students.filter(student =>
      student.name.toLowerCase().includes(name.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StudentForm</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder='Enter Name'
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder='Enter GPA'
            value={GPA}
            onChangeText={setGPA}
            keyboardType='numeric'
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Add' onPress={handleAddStudent} color='gray' />
        <Button title='Search' onPress={handleSearchByName} color='gray' />
      </View>

      <FlatList
        data={students}
        renderItem={({ item, index }) => (
          <View style={styles.record}>
            <Text>Name: {item.name}</Text>
            <Text>GPA: {item.GPA}</Text>
            <TouchableOpacity onPress={() => handleClear(index)}>
              <Text style={styles.clearButton}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button title='Clear All' onPress={handleClearAll} color='gray' />
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
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  record: {
    borderWidth: 1,
    borderColor: 'darkgreen',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'green'
  },
  clearButton: {
    color: 'white', 
    fontSize: 20,
    backgroundColor:'red',
    borderRadius:15,
    padding: 15,
    

  },
});

export default StudentForm;
