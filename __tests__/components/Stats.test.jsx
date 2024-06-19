import React from 'react'
import { render, screen } from '@testing-library/react-native'
import Stats from '../../components/Stats'

describe("Stats", () => {
  it("should render nothing on empty list", () => {
    const { root } = render(<Stats stats={[]} />)
    expect(root).toBe(undefined)
  })
  it("should render a list of Stats", () => {
    const stats = [
      {
        base_stat: 85,
        stat: {
          name: "hp"
        }
      },
      {
        base_stat: 95,
        stat: {
          name: "attack"
        }
      },
      {
        base_stat: 15,
        stat: {
          name: "x-special"
        }
      }
    ]
    render(<Stats stats={stats} />)
    const list = screen.getAllByTestId("stat-item")
    expect(list.length).toBe(3)
    expect(list[0]).toHaveTextContent(`${stats[0].stat.name.toUpperCase()}: ${stats[0].base_stat}`)
    expect(list[1]).toHaveTextContent(`${stats[1].stat.name.toUpperCase()}: ${stats[1].base_stat}`)
    expect(list[2]).toHaveTextContent(`${stats[2].stat.name.toUpperCase()}: ${stats[2].base_stat}`)
  })
})
