import "./Environnement.css"
import RapidButton from "../Components/RapidButton.js"
import BackgroundImageTopEnv from "../Images/Environnement/env_home.png"
import Titre_env from "../Images/Titres.png"

function Environnement() {
  return (
    <div className="environnement">
      <div  className="divimgtitre">
        <img className="imgtitrenv" src={Titre_env} alt=""></img>
      </div>
      <div className="divenv">
        <h1 className="env">Environnement</h1> 
      </div>
      <div className="ButtonDivEnv">
        <RapidButton image={BackgroundImageTopEnv} text="Présentation" to="/environnement" />
        <RapidButton image={BackgroundImageTopEnv} text="Fonctionnement" to="/environnement" />
        <RapidButton image={BackgroundImageTopEnv} text="Compétences" to="/environnement" />
      </div>
    </div>
  );
}
export default Environnement;