import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    changeFilterByName(state, action) {
      state.name = action.payload;
    },
    changeFilterByNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilterByName, changeFilterByNumber } = filterSlice.actions;

export default filterSlice.reducer;
