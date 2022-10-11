import "./Environnement.css"
import BackgroundImageTopEnv from "../Images/Environnement/env_home.png"
import Titre_env from "../Images/Titres.png"

function Environnement() {
  return (
    <div>
      <div  className="divimgtitre">
        <img className="imgtitrenv" src={Titre_env} alt=""></img>
      </div>
      <img className="imgenv" src={BackgroundImageTopEnv} alt=""></img>
      <div className="divenv">
        <h1 className="env">Environnement</h1> 
      </div>
    </div>
  );
}
export default Environnement;