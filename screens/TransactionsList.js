import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

export default function TransactionsList({ navigation, transactions, addTransaction }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text>{item.name} - ${item.amount} - {item.date}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Add Transaction"
        onPress={() =>
          navigation.navigate('AddTransaction', { addTransaction })
        }
      />
    </View>
  );
}
