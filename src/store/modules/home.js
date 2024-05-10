import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHighScoreData, getGoodPriceData, getHotRecommendData, getDiscountData, getLongforData, getPlusData } from "@/server";


export const fetchHomeData = createAsyncThunk("fetchHomeData", (args, { dispatch }) => {
  getHighScoreData().then(res => {
    dispatch(getHighScoreDataAction(res))
  })

  getGoodPriceData().then(res => {
    dispatch(getGoodPriceDataAction(res))
  })

  getHotRecommendData().then(res => {
    dispatch(getHotRecommendDataAction(res))
  })

  getDiscountData().then(res => {
    dispatch(getDiscountDataAction(res))
  })

  getLongforData().then(res => {
    dispatch(getLongforDataAction(res))
  })

  getPlusData().then(res => {
    dispatch(getPlusDataAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    highScoreInfo: {},
    goodPriceInfo: {},
    recommendInfo: {},
    discountInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    getHighScoreDataAction(state, { payload }) {
      state.highScoreInfo = payload
    },

    getGoodPriceDataAction(state, { payload }) {
      state.goodPriceInfo = payload
    },

    getHotRecommendDataAction(state, { payload }) {
      state.recommendInfo = payload
    },

    getDiscountDataAction(state, { payload }) {
      state.discountInfo = payload
    },

    getLongforDataAction(state, { payload }) {
      state.longforInfo = payload
    },

    getPlusDataAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
  // extraReducers: builder => {
  //   builder.addCase(getHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.highScoreInfo = payload
  //   })
  // }
})

export const { 
  getHighScoreDataAction, 
  getGoodPriceDataAction, 
  getHotRecommendDataAction, 
  getDiscountDataAction,
  getLongforDataAction,
  getPlusDataAction
} = homeSlice.actions

export default homeSlice.reducer