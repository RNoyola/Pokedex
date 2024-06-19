import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  catched: []
}

const catchSlice = createSlice({
  name: "catch",
  initialState,
  reducers: (create) => ({
    deleteCatch: create.reducer((state, action) => {
      state.catched.splice(action.payload, 1)
    }),
    addCatch: create.reducer((state, action) => {
      state.catched.push(action.payload)
    })
  })
})

export const { deleteCatch, addCatch } = catchSlice.actions
export default catchSlice.reducer