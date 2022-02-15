import "./ProductPicked.css";
// import ProductNumber from "./Products/ProductNumber";

const ProductPicked = (props) => {
  // console.log(props.img)

// console.log(props.count)

  return (
    <div>
      <div className="price">
        <div className="product-wrapper background">
          <div>{props.img}</div>
        </div>
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
        <div className="amount-container">
        <h1 className="amount">{props.count}</h1>
        </div>
      {/* <ProductNumber count={props.count}/> */}
    </div>
  );
};

export default ProductPicked;

// const ProductPicked = (props) => {

//   // console.log(props.img)

//       return (
//           <div className="price">
//           <div className="product-wrapper background">
//             <div>{props.img}</div>
//           </div>
//           <h3>{props.title}</h3>
//           <h3>{props.price}</h3>
//         </div>
//       )
//   }

//   export default ProductPicked;














/*
    return (
        <div className="price">
        <div className="product-wrapper">
          <div>{props.img}</div>
        </div>
        <h3>{props.name}</h3>
        <h3>{props.price}$</h3>
      </div>
    )
*/
