import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const store = configureStore({
  reducer: {
    count: CounterSlice,
  },
});

export default store;
