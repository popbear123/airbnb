import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfigs: {
      isFixed: false,
      isTransition: false
    }
  },
  reducers: {
    changeHeaderConfigsAction(state, { payload }) {
      state.headerConfigs = payload
    }
  }
})

export const { changeHeaderConfigsAction } = mainSlice.actions

export default mainSlice.reducer