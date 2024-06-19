/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App';
import {name as appName} from './app.json'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';

const MainWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PersistGate>
  </Provider>
) 

AppRegistry.registerComponent(appName, () => MainWrapper)
