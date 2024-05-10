import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home'
import entireStore from './modules/entire'
import detailSlice from './modules/detail'
import mainSlice from './modules/main'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireStore,
    detail: detailSlice,
    main: mainSlice
  }
})

export default store