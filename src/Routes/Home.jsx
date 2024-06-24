import React from "react";
import "./Styles/Home.css";
import { useState, useEffect } from "react";
import Coin from "./../Component/Coin.jsx";
import Footer from "./../Component/Footer.jsx";

function Home() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchCoin = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

    useEffect(() => {
      const controller = new AbortController();

      setIsLoading(true);
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
          signal: controller.signal
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {

          setIsLoading(false);
          setCoins(data);
        });

        return () => controller.abort();
    }, []);


  return (
    <div className="mainPage__container">
      <div className="mainPage__header">
        <p className="mainPage__subtitle">Welcome to</p>
        <h1 className="mainPage__title">CryptoCheck</h1>
      </div>
      <div className="mainPage__input">
        <input
          type="text"
          placeholder="Search the coin..."
          onChange={searchCoin}
        ></input>
      </div>
      <div className="crypto__container">
        {isLoading && <h1 className="loadingMssg">Data Loading...</h1>}
        {filterCoins.map((coins) => {
          return (
            <>
              <Coin
                key={coins.id}
                id={coins.id}
                icon={coins.image}
                coinName={coins.name}
                coinSymbol={coins.symbol}
                price={coins.current_price}
                marketCap={coins.market_cap}
                priceChange={coins.price_change_percentage_24h}
              />

            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
