import axios from "axios";
import { API_URL } from "./axiosConfig";

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
export default getAllSneakersApi;
