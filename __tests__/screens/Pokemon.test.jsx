import React from 'react'
import { render, screen } from '@testing-library/react-native'
import Pokemon from '../../screens/Pokemon'
import { Provider } from 'react-redux'
import { setupStore as store } from '../../store/store'
import { NavigationContainer } from '@react-navigation/native'
jest.useFakeTimers()

it('renders correctly', () => {
    const wrapper = (
        <Provider store={store({})}>
          <NavigationContainer >
            <Pokemon route={{params: { pokemonName: "ditto" }}}/>
          </NavigationContainer>
        </Provider>
      )
    render(wrapper)
    expect(screen.toJSON()).toMatchSnapshot()
  });