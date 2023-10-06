import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sneakerSlice from "../slices/sneakerSlice";


export const store = configureStore({
  reducer: {
sneakers:sneakerSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch