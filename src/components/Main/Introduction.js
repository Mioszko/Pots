import "./Introduction.css";

// const txt1 ="Strona testowa"
// const txt1b = ["wybierz produkt i", <span>*kliknij*</span>, "by dodać produkt"]


const Introduction = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <div className="welcome-x-container">
          <h2 className="txt-color">Strona testowa<span id="x1">x</span></h2>

          <h2 id="x2">x</h2>
        </div>

        <h1>wybierz produkt i, <span>*kliknij*</span>, by dodać produkt</h1>
      </div>
    </div>
  );
};

export default Introduction;
