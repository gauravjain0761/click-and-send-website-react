import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0
  },
  reducers: {
    setCartCount: (state, { payload }) => {
      state.count = payload
    },

  },
})

export const { setCartCount } = cartSlice.actions

export default cartSlice.reducer
