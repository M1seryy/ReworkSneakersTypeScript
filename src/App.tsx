import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Basket from "./components/Basket";

function App() {
  const [close, setClose] = useState<boolean>(false);
  return (
    <div className="app-wrap">
      <Basket  close={close} setClose={setClose}/>
      <Header close={close} setClose={setClose} />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
