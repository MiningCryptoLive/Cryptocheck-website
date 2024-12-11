import { Sparklines, SparklinesLine } from "react-sparklines";
import "./../../css/coinpage-css/CoinPageSparkline.css";

export default function CoinPageSparkline({day, name, sparkline}) {
  return (
    <div className="coinPageSparklineSection">
      <div className="sparklineTitle">
        <h4>{name} Price Chart (7d)</h4>
        <p>Chart only for USD price.</p>
      </div>
      <div className="sparkline">
        {day.toLocaleString() <
        0 ? (
          <Sparklines data={sparkline}>
            <SparklinesLine color="#df8653" />
          </Sparklines>
        ) : (
          <Sparklines data={sparkline}>
            <SparklinesLine color="#5353e4" />
          </Sparklines>
        )}
      </div>
    </div>
  );
}
