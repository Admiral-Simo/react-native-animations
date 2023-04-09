import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: '',
      pass: '',
    },
    registered: false
  },
  reducers: {
    setEmailPassword: (state, action) => {
      state.user = action.payload;
      state.registered = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setEmailPassword} = userSlice.actions;

export const selectUser = state => state.user.user;

export const selectIsRegistered = state => state.user.registered

export default userSlice.reducer;
