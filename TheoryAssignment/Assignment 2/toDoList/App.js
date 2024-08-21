import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const TodoListApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setEditingIndex(null);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleUpdateTask = () => {
    if (task.trim() !== '') {
      const newTasks = [...tasks];
      newTasks[editingIndex] = task;
      setTasks(newTasks);
      setTask('');
      setEditingIndex(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Enter a task"
        onChangeText={setTask}
        autoFocus={false}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.updateButton, { opacity: task.trim() === '' || editingIndex === null ? 0.5 : 1 }]}
          onPress={handleUpdateTask} 
          disabled={task.trim() === '' || editingIndex === null} 
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleDeleteTask(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleEditTask(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default TodoListApp;
