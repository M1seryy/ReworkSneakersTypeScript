import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Plus } from "../images/svg/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFavs } from "../redux/slices/sneakerSlice";
import { useAppSelector } from "../hook";
import { Dispatch } from "@reduxjs/toolkit";
import Card from "./Card";
import BasketCard from "./BasketCard";

interface PropsToBasket {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket: React.FC<PropsToBasket> = ({ close, setClose }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const FAV_SNEAKERS = useAppSelector((state) => state.sneakers.favourite);
  const closeHandler = () => {
    setClose(!close);
  };
  useEffect(() => {
    dispatch(getFavs());
  }, [close]);

  return (
    <div className={close ? "overlay" : "overlay hidden"}>
      <div className="basket-wrap">
        <Plus onClick={closeHandler} className="exit-btn"></Plus>
        <h2 className="basket-title">Orders</h2>
        <div className="cards">
          {FAV_SNEAKERS.map((item, index) => {
            return (
                <BasketCard key={index} data={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Basket;
