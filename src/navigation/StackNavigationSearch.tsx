import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Home } from '../Screens/HomeScreen/HomeScreen.component';
import { SimplePokemon } from '../interfaces/PokemonIterface';
import { PokemonScreen } from '../Screens/PokemonScreen/PokemonScreen.component';
import { SearchScreen } from '../Screens/SearchScreen/SearchScreen';

interface PokemonScreenProps {
  simplePokemon: SimplePokemon;
  color: string;
}

export type RootStackParams = {
  SearchScreen: undefined;
  PokemonScreen: PokemonScreenProps;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavitationSearch = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: 'white',
    },
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
