import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      return { value: state.value + 1 };
    },
    decrement(state, action) {
      return { value: state.value - 1 };
    },
  },
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
