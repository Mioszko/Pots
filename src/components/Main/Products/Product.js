import React, {useState} from "react";

import "./Product.css";

const Product = (props) => {


  const [value, setValue] = useState(props.count)

  const clickHandler = (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget.children[1].textContent);
    // console.log(e.currentTarget.children[2].textContent);

    // const [value, setValue] = useState(1)
    // setValue(prevCount => prevCount + 1)
    

    setValue(prevCount => prevCount + 1)

    const prod = {
      id: Math.random().toString(),
      // id: props.id,
      img: props.img,
      name: props.name,
      price: e.currentTarget.children[2].textContent,
      count: value,
    };


  //  console.log(prod);
    props.cart(prod);
    // console.log(prod.img);



    // const count = value;
    // console.log('count')
    // console.log(count)
    // props.count(count);
  };



  return (
    <div className="price" onClick={clickHandler}>
      <div className="product-wrapper">
        <div>{props.img}</div>
      </div>
      <h3>{props.name}</h3>
      <h3>{props.price}$</h3>
    </div>
  );
};

export default Product;
