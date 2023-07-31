import { configureStore, createSlice } from "@reduxjs/toolkit";

// temporarily set the initial state

const cartItems = [
  {
    id: 'rec1JZlfCIBOPdcT2',
    title: 'Samsung Galaxy S8',
    price: '399.99',
    img: 'https://images2.imgbox.com/c2/14/zedmXgs6_o.png',
    amount: 1,
  },
  {
    id: 'recB6qcHPxb62YJ75',
    title: 'google pixel',
    price: '499.99',
    img: 'https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png',
    amount: 1,
  },
  {
    id: 'recdRxBsE14Rr2VuJ',
    title: 'Xiaomi Redmi Note 2',
    price: '699.99',
    img: 'https://images2.imgbox.com/4f/3d/WN3GvciF_o.png',
    amount: 1,
  },
  {
    id: 'recwTo160XST3PIoW',
    title: 'Samsung Galaxy S7',
    price: '599.99 ',
    img: 'https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png',
    amount: 1,
  },
];

interface CartState {
  cartItems: any[],
  amount: number,
  total: number,
  isLoading: boolean
}

const sliceInitialState = {
  cartItems: cartItems,
  amount: 10,
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
