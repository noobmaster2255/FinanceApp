import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';

export default function TransactionsList({ navigation }) {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionName}>Name: {item.name}</Text>
            <Text style={styles.transactionAmount}>Amount: ${item.amount.toFixed(2)}</Text>
            <Text style={styles.transactionDate}>Date: {item.date}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
            />
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('AddTransaction')}
        style={styles.addButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  listContainer: {
    paddingBottom: 20, 
  },
  transactionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8, 
    padding: 15, 
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5, 
    elevation: 2, 
  },
  transactionName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', 
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#28a745',
  },
  transactionDate: {
    fontSize: 14,
    color: '#555', 
    marginBottom: 10,
  },
  addButton: {
    marginTop: 20, 
  },
});
