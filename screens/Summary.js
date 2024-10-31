import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';

export default function Summary() {
  const { transactions } = useContext(TransactionContext);
  const totalExpense = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial Summary</Text>
      <Text style={styles.totalExpense}>Total Expense: ${totalExpense.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  totalExpense: {
    fontSize: 20,
    fontWeight: '600',
    color: '#e74c3c', 
  },
});

