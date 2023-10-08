import axios from "axios";
import { API_URL, FAV_URL } from "./axiosConfig";

type sneaker = {
  id: number;
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
};
type reqFunc = () => Promise<sneaker[]>;

const getAllSneakersApi: reqFunc = async () => {
  const response = await API_URL.get("/getAll");
  return response.data;
};

export const getFavSneakersApi: reqFunc = async () => {
  const response = await axios.get(FAV_URL);
  return response.data;
};

export const postFavSneakersApi = async (item: sneaker) => {
  const respose = await axios.post(FAV_URL, item);
  return item;
};

export default getAllSneakersApi;
