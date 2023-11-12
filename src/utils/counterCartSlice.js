import { createSlice } from '@reduxjs/toolkit';

const counterCartSlice = createSlice({
  name: 'counterCart',
  initialState: { value: 0 },
  reducers: {
    setCountCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCountCart } = counterCartSlice.actions;
export default counterCartSlice.reducer;
