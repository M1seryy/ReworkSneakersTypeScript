import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../api/axiosConfig";
import getAllSneakersApi from "../../api/apiRequests";

export const getAllThunk = createAsyncThunk("sneakers/getAll", async () => {
  return await getAllSneakersApi();
});

type sneaker = {
  id: number;
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
};

type sneakerList = {
  list: sneaker[];
  favourite: sneaker[];
};

const initialState: sneakerList = {
  list: [],
  favourite: [],
};

const sneakerSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    addFavourite(state, { payload }) {
      state.favourite.push(payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllThunk.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});

export const { addFavourite } = sneakerSlice.actions;
export default sneakerSlice.reducer;
