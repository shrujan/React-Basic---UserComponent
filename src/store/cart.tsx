import { configureStore, createSlice } from "@reduxjs/toolkit";

const sliceInitialState = {
  count: 0
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
