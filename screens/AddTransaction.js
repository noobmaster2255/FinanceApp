import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';

export default function AddTransaction({ navigation }) {
  const { addTransaction } = useContext(TransactionContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.random().toString(),
      name,
      amount: parseFloat(amount),
      date,
    };
    addTransaction(newTransaction);
    setName('');
    setAmount('');
    setDate('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Transaction Name:</Text>
      <TextInput
        placeholder="Enter transaction name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <Text style={styles.label}>Date:</Text>
      <TextInput
        placeholder="Enter date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center', 
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10, 
    color: '#333', 
  },
  input: {
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 8, 
    paddingHorizontal: 10, 
    marginBottom: 20, 
    backgroundColor: '#fff',
  },
});