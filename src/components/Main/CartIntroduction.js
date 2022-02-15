import "./Introduction.css";

// const txt1 ="Strona testowa"
// const txt1b = ["wybierz produkt i", <span>*kliknij*</span>, "by dodać produkt"]


const CartIntroduction = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <div className="welcome-x-container">
          <h2 className="txt-color">Koszyk<span id="x1">x</span></h2>

          <h2 id="x2">x</h2>
        </div>

        <h1>Aby usunąć produkt, <span>*kliknij*</span>, produkt w koszyku</h1>
      </div>
    </div>
  );
};

export default CartIntroduction;
