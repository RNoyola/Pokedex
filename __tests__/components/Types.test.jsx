import React from 'react'
import { render, screen } from '@testing-library/react-native'
import Types from '../../components/Types'

describe("Types", () => {
  it("should display a list of types", () => {
    const types = [
        {
          type: {
            name: "fire"
          }
        },
        {
          type: {
              name: "water"
            }
        },
        {
          type: {
              name: "bug"
            }
        }
      ]
      render(<Types types={types} />)
      const list = screen.getAllByTestId("type-tag-test")
      expect(list.length).toBe(3)
      expect(list[0]).toHaveTextContent(`${types[0].type.name.toUpperCase()}`)
      expect(list[1]).toHaveTextContent(`${types[1].type.name.toUpperCase()}`)
      expect(list[2]).toHaveTextContent(`${types[2].type.name.toUpperCase()}`)
  })
})