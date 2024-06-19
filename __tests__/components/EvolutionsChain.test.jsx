import React from 'react'
import { render, screen } from '@testing-library/react-native'
import EvolutionsChain from '../../components/EvolutionsChain'

describe("Evolution Chain", () => {
  it("should show empty view on empty array", () => {
    render(<EvolutionsChain evolutions={[]}/>)
    expect(screen.toJSON()).toBeNull()
  })
  it("should show empty view on empty array", () => {
    const evolution = [
      {
        name: "test",
        asset: "http://url.com/1"
      },{
        name: "test2",
        asset: "http://url.com/2"
      },{
        name: "test3",
        asset: "http://url.com/3"
      },
      
    ]
    render(<EvolutionsChain evolutions={evolution} pokemonName={"test"}/>)
    const listImage = screen.getAllByTestId("evolution-image")
    const listView = screen.getAllByTestId("evolution-button")
    const listIcon = screen.getAllByTestId("evolution-icon")
    expect(listImage.length).toBe(3)
    expect(listImage[0]).toHaveProp("source", {uri: evolution[0].asset})
    expect(listImage[1]).toHaveProp("source", {uri: evolution[1].asset})
    expect(listImage[2]).toHaveProp("source", {uri: evolution[2].asset})
    expect(listView[0]).toHaveStyle({
      borderColor: "red",
      borderRadius: 5,
      borderWidth: 1
    })
    expect(listIcon.length).toBe(evolution.length - 1)
  })    
})