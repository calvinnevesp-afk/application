import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Trophy, Target, User } from 'lucide-react-native';

// Import des écrans
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#059669',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Défi" 
          component={HomeScreen} 
          options={{ tabBarIcon: ({ color }) => <Target color={color} size={24} /> }}
        />
        <Tab.Screen 
          name="Classement" 
          component={LeaderboardScreen} 
          options={{ tabBarIcon: ({ color }) => <Trophy color={color} size={24} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
