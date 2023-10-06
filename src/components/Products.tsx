import axios from "axios";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Card from "./Card";

type sneaker = {
  id: number;
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
};
// type allSneakers = {
//   data: sneaker[];
// };

const Products: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sneakers, setSneakers] = useState<sneaker[] | null>(null);

  const DATA_URL = `https://64dccaede64a8525a0f726c5.mockapi.io/getAll`;

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getSneakers = async () => {
    const respose = await axios.get(DATA_URL);
    setSneakers(respose.data);
  };
  useEffect(() => {
    getSneakers();
  },[]);
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
              ? sneakers
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
