import { useNavigate } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./Styles/Coin.css";

export default function Coin(props) {
  const navigate = useNavigate();
  const NavigatePage = () => {
    navigate(`/CoinPage/${props.id}?sparkline=true`);
  };

  return (
    <div className="coin__section">
      <div className="coin">
        <div className="firstSection">
          <div className="coinImg__section">
            <img src={props.icon} alt="Crypto icon" className="coinImg" />
          </div>
          <div className="coinTitle">
            <h2 className="coinSymbol">{props.coinSymbol}</h2>
            <p className="coinName">{props.coinName}</p>
          </div>
        </div>
        <div className="secondSection">
          <Sparklines
            id="sparkline"
            svgWidth={100}
            svgHeight={50}
            data={props.sparkline_7d.price}
          >
            <SparklinesLine color="hsl(240, 73%, 61%)" />
          </Sparklines>
        </div>
        <div className="thirdSection">
          <p className="coinPrice">${props.price.toFixed(2)}</p>
          {props.priceChange < 0 ? (
            <p className="priceChange red">{props.priceChange.toFixed(2)}%</p>
          ) : (
            <p className="priceChange green">
              +{props.priceChange.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="fourthSection">
          <button onClick={NavigatePage} className="coinBtn">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
