import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./../css/CoinPage.css";

function CoinPage() {
  let { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
      signal: controller.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCoin(data);
      });
    return () => controller.abort();
  }, []);

  if (coin !== null) {
    return (
      <div className="coinPage__container">
        <div className="coinInfo__container">
          <img
            src={coin.image.small}
            alt="coin image"
            className="coinPage__image"
          />
          <h1>{coin.name}</h1>
          <div className="coinPage__row">
            <h3 className="coinPage__rowHeader">Symbol:</h3>
            <h3 className="coinPage__rowData">{coin.symbol}</h3>
          </div>
          <div className="coinPage__row">
            <h3 className="coinPage__rowHeader">Current Price:</h3>
            <h3 className="coinPage__rowData">
              $ {coin.market_data.market_cap.usd.toLocaleString()}
            </h3>
          </div>
          <div className="coinPage__row">
            <h3 className="coinPage__rowHeader">Total Volume:</h3>
            <h3 className="coinPage__rowData">
              $ {coin.market_data.total_volume.usd.toLocaleString()}
            </h3>
          </div>
          <div className="coinPage__row">
            <h3 className="coinPage__rowHeader">24hr High:</h3>
            <h3 className="coinPage__rowData green">
              $ {coin.market_data.high_24h.usd.toLocaleString()}
            </h3>
          </div>
          <div className="coinPage__row">
            <h3 className="coinPage__rowHeader">24hr Low:</h3>
            <h3 className="coinPage__rowData red">
              $ {coin.market_data.low_24h.usd.toLocaleString()}
            </h3>
          </div>

          <Link to="/">
            <div className="coinPage__button">Go back</div>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default CoinPage;
