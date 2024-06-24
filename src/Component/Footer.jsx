import "./Styles/Footer.css";
import PortfolioIcon from "./../assets/portfolioIcon.png";
import LinkedinIcon from "./../assets/linkedinIcon.png";
import GithubIcon from "./../assets/githubIcon.png";

function Footer() {

    return (
      <footer>
        <div className="logo__container">
          <h1 className="logo">CryptoCheck</h1>
        </div>
        <div>
          <p>
            Made with ❤️ by <a href="#">Laura Głąb</a>
          </p>
        </div>
        <div className="icons__container">
          <a>
            <img src={PortfolioIcon} width="30px" alt="Portfolio icon" />
          </a>
          <a>
            <img src={LinkedinIcon} width="30px" alt="Linkedin icon" />
          </a>
          <a>
            <img src={GithubIcon} width="30px" alt="Github icon"/>
          </a>
        </div>
      </footer>
    );
}
export default Footer;