import React from 'react'
import { render, screen } from '@testing-library/react-native'
import Pokelist from '../../screens/PokeList'
import { Provider } from 'react-redux'
import { setupStore as store } from '../../store/store'
import { NavigationContainer } from '@react-navigation/native'
jest.useFakeTimers()

it('renders correctly', () => {
    const navigation = jest.fn()
    const wrapper = (
        <Provider store={store({})}>
          <NavigationContainer >
            <Pokelist navigation={navigation}/>
          </NavigationContainer>
        </Provider>
      )
    render(wrapper)
    expect(screen.toJSON()).toMatchSnapshot()
  });