import "./../css/Title.css";

export default function Title(){

    return (
      <div className="titlesSection">
        <div className="titlSection">
          <h1 className="title">CryptoCheck.</h1>
        </div>
        <div className="titlSecSection">
          <h2 className="secondTitle">
            Real-Time <br />
            Cryptocurrency <br /> <span>Tracking</span> & <span>Insights</span>
          </h2>
          <div className="inputSection"></div>
          <p className="subTitle">
            CryptoCheck delivers live cryptocurrency tracking, market analysis,
            and expert insights in one convenient platform. Whether you're a
            seasoned trader or a crypto enthusiast, stay informed with real-time
            data, price updates, and trends to make smarter decisions in the
            fast-evolving world of digital currencies.
          </p>
          
        </div>
      </div>
    );
};