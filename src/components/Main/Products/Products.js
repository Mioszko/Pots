import "./Products.css";
// import test1 from "../../../jpg/test2.png";
import Product from "./Product";

const Products = (props) => {



  return (
    <div className="product-container">


        {/* <Product prod={props.prod}/> */}

      {props.prod.map(prodData => <Product 
      key={prodData.id}
      img={prodData.img}
      name={prodData.name}
      price={prodData.price}
      count={prodData.count}
      cart={props.cart} 

      />) }



      {/* <div className="price">
        <div className="product-wrapper" onClick={clickHandler}>
          <div>{props.prod[3].img}</div>
        </div>
        <h3>{props.prod[3].name}</h3>
        <h3>{props.prod[3].price}$</h3>
      </div> */}


    </div>
  );
};

export default Products;
