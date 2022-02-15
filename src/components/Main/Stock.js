import Introduction from "./Introduction";
import Products from "./Products/Products";
import CardGold from "../UI/CardGold";



const Stock = (props) => {
  return (
    <div>
      <CardGold>
        <Introduction />
      </CardGold>
      <Products prod={props.prod} cart={props.cart} />
    </div>
  );
};

export default Stock;
