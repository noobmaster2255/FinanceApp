import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionDetail({ route }) {
  const transaction = route?.params?.transaction;

  if (!transaction) {
    return (
      <View>
        <Text>No transaction data available.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Name: {transaction.name}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
}
