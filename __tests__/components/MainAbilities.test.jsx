import React from 'react'
import { render, screen } from '@testing-library/react-native'
import MainAbilities from '../../components/MainAbilities'


describe("MainAbilities", () => {
  it("should render nothing on empty list", () => {
    const { root } = render(<MainAbilities mainAbilities={[]} />)
    expect(root).toBe(undefined)
  })
  it("should render a list of MainAbilities", () => {
    const mainAbilities = [
      {
        ability: {
          name: "super attack"
        }
      },
      {
        ability: {
            name: "mega attack"
          }
      },
      {
        ability: {
            name: "ultra attack"
          }
      }
    ]
    render(<MainAbilities mainAbilities={mainAbilities} />)
    const list = screen.getAllByTestId("ability-test")
    expect(list.length).toBe(3)
    expect(list[0]).toHaveTextContent(`${mainAbilities[0].ability.name}`)
    expect(list[1]).toHaveTextContent(`${mainAbilities[1].ability.name}`)
    expect(list[2]).toHaveTextContent(`${mainAbilities[2].ability.name}`)
  })
})
