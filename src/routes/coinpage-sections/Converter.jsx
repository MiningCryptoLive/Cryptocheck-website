import { useState, useEffect } from "react";
import "./../../css/coinpage-css/Converter.css";

export default function Converter({currency, current_price, image, symbol_coin}) {
  const [money, setMoney] = useState("1");
  const [converted, setConverted] = useState("");
  let price;
  let symbol;

  useEffect(() => {
    let converting = money * price;
    setConverted(converting);
    console.log(money);
  });

  (() => {
      switch (currency) {
        case "USD":
          return (price = current_price.usd), (symbol = "$");
        case "EUR":
          return (price = current_price.eur), (symbol = "€");
        case "CNY":
          return (price = current_price.cny), (symbol = "CN¥");
        case "JPY":
          return (price = current_price.jpy), (symbol = "¥");
        case "GBP":
          return (price = current_price.gbp), (symbol = "£");
        case "AUD":
          return (price = current_price.aud), (symbol = "A$");
        case "CAD":
          return (price = current_price.cad), (symbol = "CA$");
        case "CHF":
          return (price = current_price.chf), (symbol = "CHF");
        case "KRW":
          return (price = current_price.krw), (symbol = "₩");
        case "SGD":
          return (price = current_price.sgd), (symbol = "S$");
        case "ZŁ":
          return (price = current_price.pln), (symbol = "PLN");
      }})();


  return (
    <div className="converter__section">
      <h4 className="converterTitle">Crypto Converter</h4>
      <div className="converter">
        <div>
          <div className="infoConverter">
            <img
              className="imgConverter"
              src={image}
              alt={`${symbol_coin} image`}
            />
            <p className="nameConverter">{symbol_coin}</p>
          </div>
          <input
            className="inputConverter"
            type="number"
            value={money}
            min="1"
            onChange={(e) => setMoney(e.target.value)}
          />
        </div>
        <div className="convertedCoin__section">
          <p className="priceConverted">{converted.toLocaleString()}</p>
          <p className="symbolConverted">{symbol}</p>
        </div>
      </div>
    </div>
  );
}
