import React from 'react';
import { View, Text } from 'react-native';

export default function Summary({ transactions }) {
  const totalExpenses = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Expenses</Text>
      <Text style={{ fontSize: 24, marginVertical: 10 }}>${totalExpenses.toFixed(2)}</Text>
    </View>
  );
}
