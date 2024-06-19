import React from 'react'
import { render, screen } from '@testing-library/react-native'
import TypeModal from '../../modals/TypeModal'
import { Provider } from 'react-redux'
import { setupStore as store } from '../../store/store'
import { NavigationContainer } from '@react-navigation/native'
jest.useFakeTimers()

describe("TypeModal", () => {
  it("should display data when information loads", async () => {
    const navigation = jest.fn()
    const wrapper = (
      <Provider store={store({})}>
        <NavigationContainer >
          <TypeModal navigation={navigation} route={{params: { type: "rock"}}}/>
        </NavigationContainer>
      </Provider>
    )
    render(wrapper)
    const mainView = await screen.findByTestId("type-modal-main")
    const typeTags = await screen.findAllByTestId("type-tag-test")
    expect(mainView).toHaveTextContent("Strong (Double Damage) against: FIREDRAGONResistant (Half Damage taken) against: ELECTRICBUGInmmune (No Damage taken) against: STEELDARKWeak (Double Damage taken) against: NORMALWATERWeak (Half Damage) against: FAIRYGHOSTAttack are useless (No Damage) against: NONE")
    expect(typeTags[0]).toHaveTextContent("FIRE")
    expect(typeTags[1]).toHaveTextContent("DRAGON")
    expect(typeTags[2]).toHaveTextContent("ELECTRIC")
    expect(typeTags[3]).toHaveTextContent("BUG")
    expect(typeTags[4]).toHaveTextContent("STEEL")
    expect(typeTags[5]).toHaveTextContent("DARK")
    expect(typeTags[6]).toHaveTextContent("NORMAL")
    expect(typeTags[7]).toHaveTextContent("WATER")
    expect(typeTags[8]).toHaveTextContent("FAIRY")
    expect(typeTags[9]).toHaveTextContent("GHOST")
    expect(typeTags[10]).toHaveTextContent("NONE")
  })
})