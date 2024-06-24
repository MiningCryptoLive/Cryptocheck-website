import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Coin.css";

function Coin (props
){

    const navigate = useNavigate();
    const NavigatePage = () => {
      navigate(`/CoinPage/${props.id}`);
    };

    return (
      <div className="coin__container">
        <div className="coin__row">
          <div className="coinData">
            <div className="coin">
              <img src={props.icon} />
              <h1 className="coinName">{props.coinName}</h1>
              <p className="coinSymbol">{props.coinSymbol}</p>
              <p className="coinPrice">$ {props.price.toFixed(2)}</p>
              {props.priceChange < 0 ? (
                <p className="priceChange red">{props.priceChange.toFixed(2)}%</p>
              ) : (
                <p className="priceChange green">{props.priceChange.toFixed(2)}%</p>
              )};
              <p className="coinVolume">$ {props.marketCap.toLocaleString()}</p>
              <button
                onClick={NavigatePage}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Coin;