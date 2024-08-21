import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet,TextInput, Button} from 'react-native';

const DiscountCalculatorApp = () => {
  const [itemPrice, setitemPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [Savings, setSavings] = useState('');

  const calculateDiscount = () => {
    const price = parseFloat(itemPrice);
    const discount = parseFloat(discount);

    if (isNaN(price) || isNaN(discount) || discount > 100) {
      // Invalid input or discount greater than 100
      return;
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    setYouSave(discountAmount.toFixed(2));
    setFinalPrice(finalPrice.toFixed(2));

   
    setHistory([...history, { itemPrice, discount, finalPrice }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator </Text>
      <TextInput
        style={styles.input}
        placeholder="Item Price"
        keyboardType="numeric"
        value={itemPrice}
        onChangeText={itemPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount "
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <Text style={styles.result}>Savings: {Savings}</Text>
      <Text style={styles.result}>Final Price: {finalPrice}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateDiscount} color="#00cc00" />
        <Button title="View History" onPress={() => setShowHistory(true)} color="#00cc00" />
      </View>

      <Modal visible={showHistory} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Calculation History</Text>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>{`${item.itemPrice} - ${item.discount}% = ${item.finalPrice}`}</Text>
          ))}
          <Button title="Close" onPress={() => setShowHistory(false)} color="#00cc00" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  historyItem: {
    marginBottom: 10,
  },
});

export default DiscountCalculatorApp;
