import axios from "axios";
import React, { ChangeEvent, Dispatch, FC, useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { getAllThunk } from "../redux/slices/sneakerSlice";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hook";

type sneaker = {
  id: number;
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
};


const Products: FC = () => {
  const sneakers = useAppSelector(state => state.sneakers)
  const disptach:Dispatch<any> = useDispatch()
  const [searchValue, setSearchValue] = useState<string>("");

  // const DATA_URL = `https://64dccaede64a8525a0f726c5.mockapi.io/getAll`;

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
 
  // const getSneakers = async () => {
  //   const respose = await axios.get(DATA_URL);
  //   setSneakers(respose.data.slice(0,8));
  // };
  useEffect(() => {
    disptach(getAllThunk())
  },[disptach]);
  return (
    <section className="products">
      <div className="container">
        <div className="product-content">
          <h2 className="products-title">Всі кросівки</h2>
          <input
            type="text"
            onChange={onSearchHandler}
            value={searchValue}
            className="search-input"
            placeholder="Seach..."
          />
          <div className="shoes-list">
            {sneakers
              ? sneakers.list
                  .filter((item: sneaker) =>
                    item.name.toLowerCase().includes(searchValue)
                  )
                  .map((item: sneaker) => {
                    return <Card key={item.id} data={item} />;
                  })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
