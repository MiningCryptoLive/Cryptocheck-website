import { Link } from "react-router-dom";
import "./../css/components-css/Title.css";

export default function Title() {
  return (
    <div className="mainTitle__section">
      <div className="mainTitle__content">
        <Link to="/">
          <h1 className="mainTitle">CRYPTO.SOLOPOOL.PRO</h1>
        </Link>
      </div>
    </div>
  );
}
