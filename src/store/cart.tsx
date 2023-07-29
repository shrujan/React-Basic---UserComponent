import { configureStore, createSlice } from "@reduxjs/toolkit";

// temporarily set the initial state

const itemList = [
  {
    id: 'sdfsfd123123',
    title: "Samsung galaxu 1",
    price: "20000",
    img: "",
    amount: 1
  }
]

interface CartState {
  cartItems: any[],
  amount: number,
  total: number,
  isLoading: boolean
}

const sliceInitialState = {
  cartItems: itemList,
  amount: 0,
  total: 0,
  isLoading: true
}

const cartReducer = () => {
  
}

const clearCart = (state: CartState) => {
  state.cartItems = [];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: sliceInitialState,
  reducers: {
    cart: cartReducer,
    clearCart: clearCart
  }
})

console.log(cartSlice)

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})
