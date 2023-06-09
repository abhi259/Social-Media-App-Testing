'use client'

import { createSlice } from "@reduxjs/toolkit"

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: { darkMode: true },
    reducers: {
      setDarkMode: (state, action) => {
          state.darkMode = action.payload
      },
    },
  })
  
  export const { setDarkMode } = darkModeSlice.actions
  export default darkModeSlice.reducer
  