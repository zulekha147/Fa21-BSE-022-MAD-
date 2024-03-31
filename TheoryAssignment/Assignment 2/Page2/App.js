import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CheckoutPage = ({ navigation }) => {
  const handlePayment = () => {
    console.log('Payment successful!');
    navigation.navigate('ConfirmationPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.productDetails}>
        <Text>Product: Example Product</Text>
        <Text>Price: $99.99</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: $99.99</Text>
      </View>
      <Button title="Proceed to Payment" onPress={handlePayment} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productDetails: {
    marginBottom: 20,
  },
  totalContainer: {
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutPage;
