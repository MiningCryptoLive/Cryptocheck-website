import InfoIcon from "./../../assets/info-circle.svg";
import "./../../css/coinpage-css/CoinPagePrice.css";

export default function CurrencyInfo({
  currency,
  current_price,
  high_24h,
  low_24h,
  price_change_percentage_24h_in_currency,
}) {
  let price;
  let priceChange;
  let dayHigh;
  let dayLow;

  (() => {
    switch (currency) {
      case "USD":
        return (
          (price = <>${current_price.usd.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.usd < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>${high_24h.usd.toLocaleString()}</>),
          (dayLow = <>${low_24h.usd.toLocaleString()}</>)
        );
      case "EUR":
        return (
          (price = <>€{current_price.eur.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.eur < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.eur.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.eur.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>€{high_24h.eur.toLocaleString()}</>),
          (dayLow = <>€{low_24h.eur.toLocaleString()}</>)
        );
      case "CNY":
        return (
          (price = <>CN¥{current_price.cny.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.cny < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.cny.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.cny.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>CN¥{high_24h.cny.toLocaleString()}</>),
          (dayLow = <>CN¥{low_24h.cny.toLocaleString()}</>)
        );
      case "JPY":
        return (
          (price = <>¥{current_price.jpy.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.jpy < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.jpy.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.jpy.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>¥{high_24h.jpy.toLocaleString()}</>),
          (dayLow = <>¥{low_24h.jpy.toLocaleString()}</>)
        );
      case "GBP":
        return (
          (price = <>£{current_price.gbp.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.gbp < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.gbp.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.gbp.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>£{high_24h.gbp.toLocaleString()}</>),
          (dayLow = <>£{low_24h.gbp.toLocaleString()}</>)
        );
      case "AUD":
        return (
          (price = <>A${current_price.aud.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.aud < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.aud.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.aud.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>A${high_24h.aud.toLocaleString()}</>),
          (dayLow = <>A${low_24h.aud.toLocaleString()}</>)
        );
      case "CAD":
        return (
          (price = <>CA${current_price.usd.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.cad < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.cad.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.cad.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>CA${high_24h.cad.toLocaleString()}</>),
          (dayLow = <>CA${low_24h.cad.toLocaleString()}</>)
        );
      case "CHF":
        return (
          (price = <>CHF {current_price.chf.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.chf < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.chf.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.chf.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>CHF {high_24h.chf.toLocaleString()}</>),
          (dayLow = <>CHF {low_24h.chf.toLocaleString()}</>)
        );
      case "KRW":
        return (
          (price = <>₩{current_price.krw.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.krw < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.krw.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.krw.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>₩{high_24h.krw.toLocaleString()}</>),
          (dayLow = <>₩{low_24h.krw.toLocaleString()}</>)
        );
      case "SGD":
        return (
          (price = <>S${current_price.sgd.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.sgd < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.sgd.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.sgd.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>S${high_24h.sgd.toLocaleString()}</>),
          (dayLow = <>S${low_24h.sgd.toLocaleString()}</>)
        );
      case "ZŁ":
        return (
          (price = <>PLN {current_price.pln.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.pln < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.pln.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.pln.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>PLN {high_24h.pln.toLocaleString()}</>),
          (dayLow = <>PLN {high_24h.pln.toLocaleString()}</>)
        );
      default:
        return (
          (price = <>${current_price.usd.toLocaleString()}</>),
          (priceChange = (
            <>
              {price_change_percentage_24h_in_currency.usd < 0 ? (
                <p className="coinPagePriceRed">
                  {price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                </p>
              ) : (
                <p className="coinPagePriceGreen">
                  +{price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (dayHigh = <>${high_24h.eur.toLocaleString()}</>),
          (dayLow = <>${low_24h.eur.toLocaleString()}</>)
        );
    }
  })();

  return (
    <>
      <div className="coinPagePrice__section">
        <h3 className="coinPagePrice">{price}</h3>
        {priceChange}
        <div className="infoIcon">
          <img src={InfoIcon} alt="info icon" />
        </div>
        <div className="learnMore">
          <p>
            <span>How is the price of Bitcoin (BTC) calculated?</span>
            <br />
            The price of Bitcoin (BTC) is calculated in real-time by aggregating
            the latest data across 217 exchanges and 4646 markets, using a
            global volume-weighted average formula.
          </p>
        </div>
      </div>
      <div className="coinPagePriceChange__section">
        <div className="priceChangeGreen">
          <h3 className="priceChangeTitle">24hr High:</h3>
          <h3 className="greenPrice">{dayHigh}</h3>
        </div>
        <div className="priceChangeRed">
          <h3 className="priceChangeTitle">24hr Low:</h3>
          <h3 className="redPrice">{dayLow}</h3>
        </div>
      </div>
    </>
  );
}
