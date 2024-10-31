import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from './TransactionsList';
import TransactionDetail from './TransactionDetail';

const Stack = createStackNavigator();

export default function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ headerShown: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}
