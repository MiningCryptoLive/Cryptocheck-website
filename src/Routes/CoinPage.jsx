import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./Styles/CoinPage.css";

export default function CoinPage() {
  let { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`, {
      signal: controller.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setCoin(data);
      });
    return () => controller.abort();
  }, []);

  if (coin !== null) {
    return (
      <div className="coinPage__section">
        <div className="coinPage__firstSection">
          <Link to="/">
            <div className="coinPage__button">Go back</div>
          </Link>
          <div>
            <img
              src={coin.image.small}
              alt="coin image"
              className="coinPage__image"
            />
            <h1>{coin.name}</h1>
          </div>
        </div>
        <div className="coinPage__secondSection">
          <div>
            <Sparklines
              id="sparkline"
              svgWidth={100}
              svgHeight={50}
              data={coin.sparkline_7d}
            >
              <SparklinesLine color="hsl(240, 73%, 61%)" />
            </Sparklines>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
