import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.userData = payload
    },
    logout: (state, { payload }) => {
    },
  },
})

export const { setUserData, logout } = userSlice.actions

export default userSlice.reducer
