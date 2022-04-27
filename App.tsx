import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigation } from './src/navigation/TabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
};

export default App;
