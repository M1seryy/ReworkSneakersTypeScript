import React, { Dispatch, FC, useState } from "react";
import shoe from "../../images/img/shoes.png";
import { ReactComponent as ShoeLike } from "../images/svg/shoe-like.svg";
import { ReactComponent as Plus } from "../images/svg/plus.svg";
import { ReactComponent as Added } from "../images/svg/added.svg";
import axios from "axios";
import "../App.css";
import { useDispatch } from "react-redux";
import { addToFav, deleteFavs, getFavs } from "../redux/slices/sneakerSlice";

type sneaker = {
  id: number;
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
};

interface dataFromProps {
  data: sneaker;
}

const BasketCard: FC<dataFromProps> = ({ data }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onDeleteHandler = (id: any) => {
    dispatch(deleteFavs(id));
  };

  return (
    <div className="card-wrap">
      <div className="card-overlay">
        <button
          onClick={() => onDeleteHandler(data.id)}
          className="card-overlay-btn btn btn-secondary"
        >
          Delete
        </button>
      </div>

      <img className="card-img" src={data.grid_picture_url} alt="sneakers" />
      <p className="card-sub-title">{data.name}</p>
      <p className="card-sup-title">
        {(data.retail_price_cents / 100)?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        $
      </p>
    </div>
  );
};

export default BasketCard;
