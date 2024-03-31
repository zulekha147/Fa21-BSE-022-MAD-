import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Picker, Button } from 'react-native';

const ProductPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <View style={styles.container}>
      
      {product.image && (
        <Image source={{ uri: product.image }} style={styles.image} />
      )}
      <View style={styles.details}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>

       
        <Picker
          selectedValue={selectedSize}
          style={styles.picker}
          onValueChange={setSelectedSize}>
          {product.sizes.map((size) => (
            <Picker.Item key={size} label={size} value={size} />
          ))}
        </Picker>

        {product.colors && (
          <>
            <Text style={styles.label}>Color:</Text>
            <View style={styles.colors}>
              {product.colors.map((color) => (
                <View key={color} style={styles.colorSwatch}>
                  <Button
                    title={color}
                    color={color}
                    onPress={() => setSelectedColor(color)}
                    disabled={selectedColor === color}
                  />
                </View>
              ))}
            </View>
          </>
        )}

        <Button title="Add to Cart" onPress={handleAddToCart} disabled={!selectedSize} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
  },
  picker: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  colors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorSwatch: {
    margin: 4,
  },
});

export default ProductPage;
