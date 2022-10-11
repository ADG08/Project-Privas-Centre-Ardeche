import "./Environnement.css"
import BackgroundImageTopEnv from "../Images/Environnement/env_home.png"
function Environnement() {
  return (
    <div>
      <h1 className="env">Environnement</h1>
      <img className="imgenv" src={BackgroundImageTopEnv} alt=""></img>
    </div>
   
  );
}
export default Environnement;