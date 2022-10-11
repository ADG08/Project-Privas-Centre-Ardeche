import "./Footer.css";
import { Link } from "react-router-dom";
import phoneImage from "../Images/phone.png";
import emailImage from "../Images/email.jpg";
import youtubeImage from "../Images/youtube-play.png"
import twitterImage from "../Images/Twitter.png"
import facebookImage from "../Images/facebook.png"
import map from "../Images/map.png"

function Footer() {
  return (
    <div className="Footer">
      <div className="TopFooter">
        <div className="Contact">
          <h1>Contact</h1>
          <p>Privas-centre-ardeche</p>
          <p>1 Rue Serre du Serret 07000 Privas</p>
          <div className="Phone">
            <img src={phoneImage} alt=""></img>
            <p>04 75 64 07 07</p>
          </div>
          <div className="Email">
            <img src={emailImage} alt=""></img>
            <p>agglo@privas-centre-ardeche.fr</p>
          </div>
        </div>
        <div className="map">
          <img src={map} alt=""></img>
        </div>
        <div className="buttonFooter">
          <div className="cercleFooter">
            <div className="cercleItem">
              <Link to="Travaux"><img src={youtubeImage} alt=""></img></Link>
            </div>
          </div>
          <div className="cercleFooter">
            <div className="cercleItem">
              <Link to="Travaux"><img src={twitterImage} alt=""></img></Link>
            </div>
          </div>
          <div className="cercleFooter">
            <div className="cercleItem">
              <Link to="Travaux"><img src={facebookImage} alt=""></img></Link>
            </div>
          </div>
        </div>
        <div className="Liens">
          <h1>Autres Liens</h1>

          <li><Link to="/Travaux">Nos offres d'emploi</Link></li>
          <li><Link to="/Travaux">Notre magazine</Link></li>
          <li><Link to="/Travaux">Notre magazine à la radio</Link></li>
          <li><Link to="/Travaux">Nos marchés publics</Link></li>
          <li><Link to="/Travaux">Nos actes administratifs</Link></li>
          <li><Link to="/Travaux">Nos autorisations d'occupation du domaine public et privé</Link></li>
          <li><Link to="/Travaux">En savoir plus</Link></li>
        </div>
      </div>
      <div className="BottomFooter">
        <p><Link to="/Travaux">Plan du site</Link> | <Link to="/Travaux">Accessibilité</Link> | <Link to="/Travaux">Mentions légales</Link></p>
      </div>
    </div>
  );
}

export default Footer;
