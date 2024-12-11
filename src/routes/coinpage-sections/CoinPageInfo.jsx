import InfoIcon from "./../../assets/info-circle.svg";
import "./../../css/coinpage-css/CoinPageInfo.css";

export default function CoinPageInfo({
  currency,
  currencySymbol,
  market_cap,
  fully_diluted_valuation,
  circulating_supply,
  total_supply,
  max_supply,
  ath,
  ath_change_percentage,
  ath_date,
  atl,
  atl_change_percentage,
  atl_date,
}) {
 
  const currencyKey = currency.toLowerCase() || "usd"; 

  const marketCap = market_cap?.[currencyKey];
  const fdv = fully_diluted_valuation?.[currencyKey];
  const athV = ath?.[currencyKey];
  const athPerc = ath_change_percentage?.[currencyKey];
  const athDate = ath_date?.[currencyKey];
  const atlV = atl?.[currencyKey];
  const atlPerc = atl_change_percentage?.[currencyKey];
  const atlDate = atl_date?.[currencyKey];

  return (
    <div className="coinPageInfoSection" id="nextPart">
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>Market Cap</p>
          <div className="infoIcon">
            <img src={InfoIcon} alt="info icon" />
          </div>
          <div className="learnMore">
            <p>
              <span>Market Cap = Current Price x Circulating Supply</span>
              <br />
              Refers to the total market value of a cryptocurrency's circulating
              supply. It is similar to the stock market's measurement of
              multiplying price per share by shares readily available in the
              market (not held & locked by insiders, governments)
            </p>
          </div>
        </div>
        <div>
          <p>
            {marketCap
              ? `${currencySymbol} ${marketCap.toLocaleString()}`
              : "N/A"}
          </p>
        </div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>Fully Diluted Valuation</p>
          <div className="infoIcon">
            <img src={InfoIcon} alt="info icon" />
          </div>
          <div className="learnMore">
            <p>
              <span>
                Fully Diluted Valuation (FDV) = Current Price x Total Supply
              </span>
              <br />
              Fully Diluted Valuation (FDV) is the theoretical market
              capitalization of a coin if the entirety of its supply is in
              circulation, based on its current market price. The FDV value is
              theoretical as increasing the circulating supply of a coin may
              impact its market price.
            </p>
          </div>
        </div>
        <div>
          <p>{fdv ? `${currencySymbol} ${fdv.toLocaleString()}` : "N/A"}</p>
        </div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>Circulating Supply</p>
          <div className="infoIcon">
            <img src={InfoIcon} alt="info icon" />
          </div>
          <div className="learnMore">
            <p>
              The amount of coins that are circulating in the market and are
              tradeable by the public. It is comparable to looking at shares
              readily available in the market (not held & locked by insiders,
              governments).
            </p>
          </div>
        </div>
        <div>{circulating_supply}</div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>Total Supply</p>
          <div className="infoIcon">
            <img src={InfoIcon} alt="info icon" />
          </div>
          <div className="learnMore">
            <p>
              The amount of coins that have already been created, minus any
              coins that have been burned (removed from circulation). It is
              comparable to outstanding shares in the stock market.
              <br />
              Total Supply = Onchain supply - burned tokens
            </p>
          </div>
        </div>
        <div>{total_supply}</div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>Max Supply</p>
          <div className="infoIcon">
            <img src={InfoIcon} alt="info icon" />
          </div>
          <div className="learnMore">
            <p>
              The maximum number of coins coded to exist in the lifetime of the
              cryptocurrency. It is comparable to the maximum number of issuable
              shares in the stock market.
              <br />
              Max Supply = Theoretical maximum as coded
            </p>
          </div>
        </div>
        <div>{max_supply}</div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>All-Time High</p>
        </div>
        <div>
          <div className="allTimeSection">
            <p>{athV ? `${currencySymbol} ${athV.toLocaleString()}` : "N/A"}</p>
            <p className="coinPagePriceRed">
              {athPerc ? `${athPerc.toFixed(2)}%` : "N/A"}
            </p>
          </div>
          <div className="allTimeDate">
            <p>{athDate ? athDate.slice(0, 10) : "N/A"}</p>
          </div>
        </div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>All-Time Low</p>
        </div>
        <div>
          <div className="allTimeSection">
            <p>{atlV ? `${currencySymbol} ${atlV.toLocaleString()}` : "N/A"}</p>
            <p className="coinPagePriceGreen">
              {atlPerc ? `+${atlPerc.toFixed(2)}%` : "N/A"}
            </p>
          </div>
          <div className="allTimeDate">
            <p>{atlDate ? atlDate.slice(0, 10) : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
