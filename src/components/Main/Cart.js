import "./Cart.css"
import ProductPicked from "./ProductPicked"
const Cart = (props) => {


// const count = props.count;
// console.log(count, 'hehheh');

//  console.log(props.cartDisplay);

 const productsReceived = props.cartDisplay;
//  console.log('productsReceived');
//  console.log(productsReceived);



// const productsName = productsReceived.map( item => {
// return item['name']
// })
// console.log('productsName');
// console.log(productsName)



//1.  const filtredProducts = productsReceived.filter( product => {
//      console.log(product.name.toLocaleString())
// return product.name !== productsName;
//  })



const filtredProducts = [...new Map(productsReceived.map((item) => [item["name"], item])).values()];
 console.log('filtredProducts');
 console.log(filtredProducts);



 function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
 
  const sortedProducts = filtredProducts.sort( compare );


                //zeby nie powtarzal to sortedProducts.map - tylko wtedy bierze tylko pierwszy Array i count wtedy zawsze 1
const displayProduct = sortedProducts.map(data => <ProductPicked 
    key={data.id}
    img={data.img}
    title={data.name}
    price={data.price}
    count={data.count}
    />)

    // const displayProduct2 = productsReceived.map(data => <ProductPicked 
    //     count={data.count}/>)

//     const singleProduct = displayProduct.filter( product => {
//     return product.name !== displayProduct.name;
// })

    return (
        <div className="product-container height">
            {displayProduct}
            {/* {displayProduct2} */}

            {/* <ProductPicked prod={props.cartDisplay}/> */}
        </div>
    )
}

export default Cart;


  //1. const filtredExpenses = props.info.filter( expensee => {
  //   return expensee.date.getFullYear().toString() === filteredYear;
  // })







// const Cart = (props) => {

//     console.log(props.cartDisplay);
   
   
   
//        return (
//            <div className="product-container height">
//                {props.cartDisplay.map(data => <ProductPicked 
//                key={data.id}
//                img={data.img}
//                title={data.name}
//                price={data.price}/>)}
   
//                {/* <ProductPicked prod={props.cartDisplay}/> */}
//            </div>
//        )
//    }
   
//    export default Cart;