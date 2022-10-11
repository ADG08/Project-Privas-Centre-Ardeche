import "./Environnement.css"
import BackgroundImageTopEnv from "../Images/Environnement/env_home.png"
import Titre_env from "../Images/Titres.png"

function Environnement() {
  return (
    <div>
      
      <img className="imgtitrenv" src={Titre_env} alt=""></img>
      <img className="imgenv" src={BackgroundImageTopEnv} alt=""></img>
      <h1 className="env">Environnement</h1>
    </div>
   
  );
}
export default Environnement;