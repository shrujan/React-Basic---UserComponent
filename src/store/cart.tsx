import { configureStore, createSlice } from "@reduxjs/toolkit";

const sliceInitialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true
}

const slice = createSlice({
  name: "cart",
  initialState: sliceInitialState,
  reducers: {
    
  }
})

export const store = configureStore({
  reducer: slice.reducer
})
