import React from 'react'
import { render, screen } from '@testing-library/react-native'
import AbilityModal from '../../modals/AbilityModal'
import { Provider } from 'react-redux'
import { setupStore as store } from '../../store/store'
import { NavigationContainer, useRoute } from '@react-navigation/native'
jest.useFakeTimers()

describe("AbilityModal", () => {
  it("should display data when information loads", async () => {
    const navigation = jest.fn()
    const wrapper = (
      <Provider store={store({})}>
        <NavigationContainer >
          <AbilityModal navigation={navigation} route={{params: { ability: "stench"}}}/>
        </NavigationContainer>
      </Provider>
    )
    render(wrapper)
    const title = await screen.findByTestId("ability-title")
    const description = await screen.findByTestId("ability-description")
    expect(title).toHaveTextContent("STENCH")
    expect(description).toHaveTextContent("do some damage to a pokemon")
  })
})