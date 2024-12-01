import InfoIcon from "./../../assets/info-circle.svg";
import "./../../css/coinpage-css/CoinPageInfo.css";

export default function CoinPageInfo({currency, market_cap,fully_diluted_valuation,
                                    circulating_supply,total_supply,
                                    max_supply,ath,ath_change_percentage,ath_date,
                                    atl,atl_change_percentage,atl_date}) {
  
  let marketCap;
  let fdv;
  let athValue;
  let athPercent;
  let athDate;
  let atlValue;
  let atlPercent;
  let atlDate;

    (() => {
      switch (currency) {
        case "USD":
          return (
            (marketCap = <>${market_cap.usd.toLocaleString()}</>),
            (fdv = <>${fully_diluted_valuation.usd.toLocaleString()}</>),
            (athValue = <>${ath.usd.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.usd.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.usd.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.usd.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.usd.slice(0, 10)}</>),
            (atlValue = <>${atl.usd.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.usd.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.usd.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.usd.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.usd.slice(0, 10)}</>)
          );
        case "EUR":
          return (
            (marketCap = <>€{market_cap.eur.toLocaleString()}</>),
            (fdv = <>€{fully_diluted_valuation.eur.toLocaleString()}</>),
            (athValue = <>€{ath.eur.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.eur.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.eur.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.eur.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.eur.slice(0, 10)}</>),
            (atlValue = <>€{atl.eur.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.eur.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.eur.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.eur.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.eur.slice(0, 10)}</>)
          );
        case "CNY":
          return (
            (marketCap = <>CN¥{market_cap.cny.toLocaleString()}</>),
            (fdv = <>CN¥{fully_diluted_valuation.cny.toLocaleString()}</>),
            (athValue = <>CN¥{ath.cny.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.cny.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.cny.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.cny.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.cny.slice(0, 10)}</>),
            (atlValue = <>CN¥{atl.cny.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.cny.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.cny.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.cny.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.cny.slice(0, 10)}</>)
          );
        case "JPY":
          return (
            (marketCap = <>¥{market_cap.jpy.toLocaleString()}</>),
            (fdv = <>¥{fully_diluted_valuation.jpy.toLocaleString()}</>),
            (athValue = <>¥{ath.jpy.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.jpy.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.jpy.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.jpy.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.jpy.slice(0, 10)}</>),
            (atlValue = <>¥{atl.jpy.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.jpy.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.jpy.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.jpy.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.jpy.slice(0, 10)}</>)
          );
        case "GBP":
          return (
            (marketCap = <>£{market_cap.gbp.toLocaleString()}</>),
            (fdv = <>£{fully_diluted_valuation.gbp.toLocaleString()}</>),
            (athValue = <>£{ath.gbp.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.gbp.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.gbp.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.gbp.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.gbp.slice(0, 10)}</>),
            (atlValue = <>£{atl.gbp.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.gbp.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.gbp.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.gbp.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.gbp.slice(0, 10)}</>)
          );
        case "AUD":
          return (
            (marketCap = <>A${market_cap.aud.toLocaleString()}</>),
            (fdv = <>A${fully_diluted_valuation.aud.toLocaleString()}</>),
            (athValue = <>A${ath.aud.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.aud.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.aud.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.aud.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.aud.slice(0, 10)}</>),
            (atlValue = <>A${atl.aud.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.aud.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.aud.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.aud.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.aud.slice(0, 10)}</>)
          );
        case "CAD":
          return (
            (marketCap = <>CA${market_cap.cad.toLocaleString()}</>),
            (fdv = <>CA${fully_diluted_valuation.cad.toLocaleString()}</>),
            (athValue = <>CA${ath.cad.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.cad.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.cad.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.cad.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.cad.slice(0, 10)}</>),
            (atlValue = <>CA${atl.cad.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.cad.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.cad.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.cad.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.cad.slice(0, 10)}</>)
          );
        case "CHF":
          return (
            (marketCap = <>CHF {market_cap.chf.toLocaleString()}</>),
            (fdv = <>CHF {fully_diluted_valuation.chf.toLocaleString()}</>),
            (athValue = <>CHF {ath.chf.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.chf.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.chf.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.chf.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.chf.slice(0, 10)}</>),
            (atlValue = <>CHF {atl.chf.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.chf.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.chf.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.chf.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.chf.slice(0, 10)}</>)
          );
        case "KRW":
          return (
            (marketCap = <>₩{market_cap.krw.toLocaleString()}</>),
            (fdv = <>₩{fully_diluted_valuation.krw.toLocaleString()}</>),
            (athValue = <>₩{ath.krw.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.krw.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.krw.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.krw.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.krw.slice(0, 10)}</>),
            (atlValue = <>₩{atl.krw.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.krw.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.krw.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.krw.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.krw.slice(0, 10)}</>)
          );
        case "SGD":
          return (
            (marketCap = <>S${market_cap.sgd.toLocaleString()}</>),
            (fdv = <>S${fully_diluted_valuation.sgd.toLocaleString()}</>),
            (athValue = <>S${ath.sgd.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.sgd.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.sgd.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.sgd.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.sgd.slice(0, 10)}</>),
            (atlValue = <>S${atl.sgd.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.sgd.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.sgd.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.sgd.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.sgd.slice(0, 10)}</>)
          );
        case "ZŁ":
          return (
            (marketCap = <>PLN {market_cap.pln.toLocaleString()}</>),
            (fdv = <>PLN {fully_diluted_valuation.pln.toLocaleString()}</>),
            (athValue = <>PLN {ath.pln.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.pln.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.pln.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.pln.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.pln.slice(0, 10)}</>),
            (atlValue = <>PLN {atl.pln.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.pln.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.pln.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.pln.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.pln.slice(0, 10)}</>)
          );
        default:
          return (
            (marketCap = <>${market_cap.usd.toLocaleString()}</>),
            (fdv = <>${fully_diluted_valuation.usd.toLocaleString()}</>),
            (athValue = <>${ath.usd.toLocaleString()}</>),
            (athPercent = (
              <>
                {ath_change_percentage.usd.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {ath_change_percentage.usd.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{ath_change_percentage.usd.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (athDate = <>{ath_date.usd.slice(0, 10)}</>),
            (atlValue = <>${atl.usd.toLocaleString()}</>),
            (atlPercent = (
              <>
                {atl_change_percentage.usd.toLocaleString() < 0 ? (
                  <p className="coinPagePriceRed">
                    {atl_change_percentage.usd.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coinPagePriceGreen">
                    +{atl_change_percentage.usd.toFixed(2)}%
                  </p>
                )}
              </>
            )),
            (atlDate = <>{atl_date.usd.slice(0, 10)}</>)
          );
      }
    })();

  
  return (
    <div className="coinPageInfo__section" id="nextPart">
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
          <p>{marketCap}</p>
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
              impact its market price. Also depending on the tokenomics,
              emission schedule or lock-up period of a coin's supply, it may
              take a significant time before its entire supply is released into
              circulation.
            </p>
          </div>
        </div>
        <div>
          <p>{fdv}</p>
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
        <div>
          <p>{total_supply}</p>
        </div>
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
          <div className="allTime__section">
            <p>{athValue}</p>
            <p>{athPercent}</p>
          </div>
          <div className="allTimeDate">
            <p>{athDate}</p>
          </div>
        </div>
      </div>
      <div className="lineInfo">
        <div className="lineInfoTitle">
          <p>All-Time Low</p>
        </div>
        <div>
          <div className="allTime__section">
            <p>{atlValue}</p>
            <p>{atlPercent}</p>
          </div>
          <div className="allTimeDate">
            <p>{atlDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
