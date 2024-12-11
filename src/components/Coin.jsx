import React from "react";
import { useNavigate } from "react-router-dom";
import "./../css/Coin.css";

function Coin(props) {
  const navigate = useNavigate();
  const NavigatePage = () => {
    navigate(`/CoinPage/${props.id}`);
  };

  return (
    <div className="coin__section">
      <div className="coin">
        <div className="coinTitle">
          <img src={props.icon} alt="Crypto icon" className="coinImg" />
          <h1 className="coinName">{props.coinName}</h1>
          <p className="coinSymbol">{props.coinSymbol}</p>
          <div>{props.sparkline}</div>
        </div>

        <p className="coinPrice">$ {props.price.toFixed(2)}</p>
        {props.priceChange < 0 ? (
          <p className="priceChange red">{props.priceChange.toFixed(2)}%</p>
        ) : (
          <p className="priceChange green">{props.priceChange.toFixed(2)}%</p>
        )}
        <p className="coinVolume">$ {props.marketCap.toLocaleString()}</p>
        <button onClick={NavigatePage} className="coinBtn">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Coin;
