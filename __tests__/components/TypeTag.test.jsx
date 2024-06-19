import React from 'react'
import { render, screen } from '@testing-library/react-native'
import TypeTag from '../../components/TypeTag'

describe("TypeTag", () => {
  it("should display the type tag with a white color and text when not a valid type ", async () => {
    render(<TypeTag type={"none"}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent("NONE")
    expect(tag).toHaveProp("style", {
      "backgroundColor": "white",
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #9e9e70 color and text", async () => {
    const type = "normal"
    const color = "#9e9e70"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #f67435 color and text", async () => {
    const type = "fire"
    const color = "#f67435"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #5a86e9 color and text", async () => {
    const type = "water"
    const color = "#5a86e9"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #fac941 color and text", async () => {
    const type = "electric"
    const color = "#fac941"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #5fc152 color and text", async () => {
    const type = "grass"
    const color = "#5fc152"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #85d3d2 color and text", async () => {
    const type = "ice"
    const color = "#85d3d2"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #c12928 color and text", async () => {
    const type = "fighting"
    const color = "#c12928"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #9d3892 color and text", async () => {
    const type = "poison"
    const color = "#9d3892"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #deb765 color and text", async () => {
    const type = "ground"
    const color = "#deb765"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #a286e9 color and text", async () => {
    const type = "flying"
    const color = "#a286e9"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #ff4c7c color and text", async () => {
    const type = "psychic"
    const color = "#ff4c7c"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #98af33 color and text", async () => {
    const type = "bug"
    const color = "#98af33"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #b1953c color and text", async () => {
    const type = "rock"
    const color = "#b1953c"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #684e8a color and text", async () => {
    const type = "ghost"
    const color = "#684e8a"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #6c34f0 color and text", async () => {
    const type = "dragon"
    const color = "#6c34f0"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #674e40 color and text", async () => {
    const type = "dark"
    const color = "#674e40"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #b0afc8 color and text", async () => {
    const type = "steel"
    const color = "#b0afc8"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should display the type tag with a #f3adb4 color and text", async () => {
    const type = "fairy"
    const color = "#f3adb4"
    render(<TypeTag type={type}/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toHaveTextContent(type.toUpperCase())
    expect(tag).toHaveProp("style", {
      "backgroundColor": color,
      "alignContent": "center",
      "borderRadius": 5,
      "height": 20,
      "justifyContent": "center",
      "opacity": 1,
      "padding": 5,
      "width": 60
    })
  })
  it("should be a disabled button", async () => {
    render(<TypeTag type="none" disable/>)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toBeDisabled()
  })
  it("should be a functional button", async () => {
    render(<TypeTag type="none" />)
    const tag = await screen.findByTestId("type-tag-test")
    expect(tag).toBeEnabled()
  })
})