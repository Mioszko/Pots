// import React ,{useState} from "react";

import "./Main.css";

import Home from "./Home";
import Stock from "./Stock";
import StockPicked from "./StockPicked";


const Main = (props) => {




  const cartData = (passProd) => {
    props.shop(passProd);
    // console.log(passProd)
  };

// const [count, setCount] = useState(0)

  // const cartCount = (passCount) => {
  //   setCount(passCount);
    // console.log('main count')
    // console.log(count)
  // }


  return (
    <div className="main-container">
      <Home />

      <Stock prod={props.prod} cart={cartData} />


      <StockPicked cartDisplay={props.shopCart}/>

    </div>
  );
};

export default Main;
