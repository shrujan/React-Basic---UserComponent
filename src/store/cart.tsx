import { configureStore, createSlice } from "@reduxjs/toolkit";

const sliceInitialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true
}

const cartReducer = () => {
  
}

const slice = createSlice({
  name: "cart",
  initialState: sliceInitialState,
  reducers: {
    cart: cartReducer
  }
})

export const store = configureStore({
  reducer: {
    cart: slice.reducer
  }
})
