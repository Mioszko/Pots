import makieta from "../../jpg/test2.png";

const Home = () => {

    return (
        <div className="full-page">
        <div className="main__image-container">
          <div className="txt_container">
            <h1 id="h1_1">Hej</h1>
            <h1 id="h1_2">jest</h1>
            <h1 id="h1_3">okej</h1>
          </div>
          <div>
            <img className="main" src={makieta} alt="3d print" />
          </div>
        </div>
      </div>
    )
}

export default Home;