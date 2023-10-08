import React, { Dispatch, FC, useState } from "react";
import shoe from "../../images/img/shoes.png";
import { ReactComponent as ShoeLike } from "../images/svg/shoe-like.svg";
import { ReactComponent as Plus } from "../images/svg/plus.svg";
import { ReactComponent as Added } from "../images/svg/added.svg";
import axios from "axios";
import "../App.css";
import { useDispatch } from "react-redux";
import { addToFav } from "../redux/slices/sneakerSlice";

type sneaker = {
  id: number;
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
};

interface dataFromProps {
  data: sneaker;
}

const Card: FC<dataFromProps> = ({ data }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [added, setAdded] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const onClickHandler = () => {
    dispatch(addToFav(data));
  };

  return (
    <div className="card-wrap">
      <div className="card-overlay">
        <button className="card-overlay-btn">Delete</button>
      </div>
      <div className="card-like-icon">
        <ShoeLike
          onClick={onClickHandler}
          className={isLiked ? "liked-card" : "like-btn "}
        ></ShoeLike>
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
      {added ? (
        <div className="card-add-icon-added">
          <Added className="added-icon"></Added>
        </div>
      ) : (
        <div className="card-add-icon">
          <Plus className="plus-btn"></Plus>
        </div>
      )}
    </div>
  );
};

export default Card;
