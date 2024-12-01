import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CoinPageMenu from "./CoinPageMenu.jsx";
import ArrowDownIcon from "./../../assets/icon-arrow-down.svg";
import ArrowRight from "./../../assets/arrow-point-to-right.svg";
import ArrowUpIcon from "./../../assets/icon-arrow-up.svg";
import "./../../css/coinpage-css/CoinPageBtn.css";

export default function CoinPageBtn({name, currency, setCurrency}) {
  const [showMenu, setShowMenu] = useState(false);
  let menuRef = useRef();

  function handleToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="coinPageBtn__section">
      <div className="coinPageBackBtn__section">
        <Link className="backBtn" to="/">
          <div>Cryptocurrencies</div>
        </Link>
        <img
          className="arrowRightIcon"
          src={ArrowRight}
          alt="arrow right icon"
        />
        <p>{name} Price</p>
      </div>
      <button className="currencyBtn" onClick={handleToggle} ref={menuRef}>
        {currency}
        {showMenu ? (
          <img
            className="arrowBtn"
            src={ArrowUpIcon}
            aria-label="open side-menu"
            alt="arrowUp icon"
          />
        ) : (
          <img
            className="arrowBtn"
            src={ArrowDownIcon}
            aria-label="close side-menu"
            alt="arrowDown icon"
          />
        )}
        {showMenu === true && (
          <div className="backgroundBlur">
            <CoinPageMenu setCurrency={setCurrency} />
          </div>
        )}
      </button>
    </div>
  );
}
