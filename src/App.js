import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import test1 from "./jpg/test2.png";
import test2 from "./jpg/d1.png";
import test3 from "./jpg/d2.png";
import test4 from "./jpg/d3.png";

const products = [
  {
    id: 1,
    price: 49,
    name: "Makieta",
    img: <img className="product-img" src={test1} alt="karpniki zamek" />,
    count: 1,
  },
  {
    id: 2,
    price: 16,
    name: "Omega",
    img: <img className="product-img" src={test2} alt="karpniki zamek" />,
    count: 1,
  },
  {
    id: 3,
    price: 12,
    name: "Sigma",
    img: <img className="product-img" src={test3} alt="karpniki zamek" />,
    count: 1,
  },
  {
    id: 4,
    price: 8,
    name: "Rouga",
    img: <img className="product-img" src={test4} alt="karpniki zamek" />,
    count: 1,
  },
];

function App() {
  const cart = [];

  const [pickedProd, setPickedProd] = useState(cart);

  
  const cartFunc = (prodSelected) => {
    setPickedProd((prevState) => {
      return [prodSelected, ...prevState];
    });
    console.log(pickedProd);
    // console.log(prodSelected);
  };

  return (
    <div className="app-grid_layout">
      <Header />
      <Main prod={products} shop={cartFunc} shopCart={pickedProd} />
      <Footer />
    </div>
  );
}

export default App;
