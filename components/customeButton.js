import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const MyButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Button clicked!')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom : 20
  },
  button: {
    backgroundColor: '#daa520',
    paddingVertical: 15,
    paddingHorizontal: 135,
    borderRadius: 5,
    width : 350
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyButton;
