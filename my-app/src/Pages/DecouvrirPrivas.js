import "./DecouvrirPrivas.css"
import BackgroundImageTopDec from "../Images/Decouvrir-Privas/privas.PNG"
import Titre_dec from "../Images/Titres.png"

function Decouvrir_Privas() {
  return (
    <div>
      <div  className="divimgtitre_dec">
        <img className="imgtitredec" src={Titre_dec} alt=""></img>
      </div>
      <img className="imgdec" src={BackgroundImageTopDec} alt=""></img>
      <div className="divdec">
        <h1 className="dec">Découvrir Privas</h1> 
      </div>
      <div className="ButtonDivEnv">
        <RapidButton image={BackgroundImageTopDec} text = "Energie" to="/environnement" />
        <RapidButton image={BackgroundImageTopDec} text="Eau" to="/environnement" />
        <RapidButton image={BackgroundImageTopDec} text="Déchets ménagers" to="/environnement" />
      </div>
    </div>
  );
}
export default Decouvrir_Privas;