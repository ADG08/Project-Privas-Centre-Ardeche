import "./Culture.css"
import imageFond from "../Images/culture/biblio_page_culture.jpg"
import encadreTitre from "../Images/culture/encadre.png"
import imgPresentation from "../Images/culture/img_presentation.png"

function Culture() {
  return (
    <div className="body">

      <div className="premierePart">
        <img src = {imageFond} alt = "" className="imgFond"></img>
        <img src = {encadreTitre} alt = "" className="encadreTitre"></img>
        <h1 className="titre">Culture</h1>
      </div>

      <div className ="deuxiemePart">
        <div className = "lignes"></div>
        <img src= {imgPresentation} alt="" className="imgPresentation"></img>
        <div className = "lignes"></div>

      </div>
    </div>
  );
}

export default Culture;