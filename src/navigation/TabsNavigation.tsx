import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavitation } from './StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavitationSearch } from './StackNavigationSearch';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 15,
        },
        tabBarStyle: {
          opacity: 0.3,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavitation}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: item => (
            <Icon name="list-outline" color={item.color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={StackNavitationSearch}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: item => (
            <Icon name="search-outline" color={item.color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
