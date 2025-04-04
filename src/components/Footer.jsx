import "./../css/components-css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          Data Provided By: 
          <a className="footerLink" href="https://www.coingecko.com/">
            Coingecko
          </a>
        </p>
        <p>
          My Github <a className="footerLink" href="https://github.com/MiningCryptoLive">MiningCryptoLive</a>
        </p>
      </div>
    </footer>
  );
}
