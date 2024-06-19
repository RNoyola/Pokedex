/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PokeList from './screens/PokeList';
import Pokemon from './screens/Pokemon';
import AbilityModal from './modals/AbilityModal';
import TypeModal from './modals/TypeModal';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Stack.Navigator  initialRouteName="List">
      <Stack.Group>
        <Stack.Screen name="Main" component={PokeList} options={screenOptions} />
        <Stack.Screen name="PokemonDetail" component={Pokemon}  />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="AbilityModal" component={AbilityModal}  />
        <Stack.Screen name="TypeModal" component={TypeModal}  />
      </Stack.Group>
      
      
    </Stack.Navigator>
  )
}

const screenOptions = {
  headerShown: false
}

const styles = StyleSheet.create({
  
})

export default App;
