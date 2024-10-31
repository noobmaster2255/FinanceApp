import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionProvider from './screens/TransactionContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionsStack from './screens/TransactionsStack'; // Ensure this path is correct
import AddTransaction from './screens/AddTransaction';
import Summary from './screens/Summary';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Transactions') {
                iconName = 'list';
              } else if (route.name === 'Summary') {
                iconName = 'pie-chart';
              } else if (route.name === 'AddTransaction') {
                iconName = 'add-circle';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarLabel: () => null,
          })}
        >
          <Tab.Screen name="Transactions" component={TransactionsStack} options={tabBarLabel = null} />
          <Tab.Screen name="AddTransaction" component={AddTransaction} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="Summary" component={Summary} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
