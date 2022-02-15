import CartIntroduction from "./CartIntroduction";
import Cart from "./Cart";
import CardBlue from "../UI/CardBlue";

const StockPicked = (props) => {
  return (
    <div>
      <CardBlue>
        <CartIntroduction />
      </CardBlue>
      <Cart cartDisplay={props.cartDisplay} count={props.count} />
    </div>
  );
};

export default StockPicked;