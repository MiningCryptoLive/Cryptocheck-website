import { useState, useEffect } from "react";
import Coin from "../components/Coin.jsx";
import "./../css/CoinStats.css";

function Home(props) {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true",
      {
        signal: controller.signal,
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setCoins(data);
      });

    return () => controller.abort();
  }, []);

  const searchCoin = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div className="rightSection">
      <input
        type="text"
        placeholder="Search the coin..."
        onChange={searchCoin}
        className="inputSearch"
      ></input>
      <div className="crypto__section">
        {props.isLoading && <h1 className="loadingMssg">Data Loading...</h1>}
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
                sparkline={coins.sparkline_in_7d.price}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
