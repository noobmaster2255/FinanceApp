import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{transaction.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>${transaction.amount.toFixed(2)}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },

  detailContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 10, 
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 18,
    fontWeight: '600', 
    color: '#555',
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
});
