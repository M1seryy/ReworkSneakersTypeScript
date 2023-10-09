import { deleteFavSneakers, getFavSneakersApi } from "./../../api/apiRequests";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import getAllSneakersApi, { postFavSneakersApi } from "../../api/apiRequests";

export const getAllThunk = createAsyncThunk("sneakers/getAll", async () => {
  return await getAllSneakersApi();
});

export const addToFav = createAsyncThunk(
  "sneakers/add",
  async (body: sneaker) => {
    return await postFavSneakersApi(body);
  }
);
export const deleteFavs = createAsyncThunk(
  "sneakers/deleteFavs",
  async (body: string) => {
    return await deleteFavSneakers(body);
  }
);

export const getFavs = createAsyncThunk("sneakers/getFav", async () => {
  return await getFavSneakersApi();
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
    // addFavourite(state, { payload }) {
    //   state.favourite.push(payload);
    // },
  },
  extraReducers(builder) {
    builder.addCase(getAllThunk.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
    builder.addCase(getFavs.fulfilled, (state, { payload }) => {
      state.favourite = payload;
    });
    builder.addCase(deleteFavs.fulfilled, (state, { payload }: any) => {
      console.log(payload);
      const filtered = state.favourite.filter(
        (item: sneaker) => item.id !== payload
      );
      state.favourite = filtered;
    });
  },
});

// export const { addFavourite } = sneakerSlice.actions;
export default sneakerSlice.reducer;
