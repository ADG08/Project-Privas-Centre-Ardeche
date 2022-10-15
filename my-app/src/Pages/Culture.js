import "./Culture.css"
import encadreTitre from "../Images/culture/encadre.png"
import imgPresentation from "../Images/culture/img_presentation.png"

function Culture() {
  return (
    <div className="body">

      <div className="premierePart">
        <img src = {encadreTitre} alt = "" className="encadreTitre"></img>
        <h1 className="titre">Culture</h1>
      </div>

      <div className ="deuxiemePart">
        <div className = "lignes"></div>
        <div className="paragraphe"><p>La volonté de la politique culturelle de la Communauté d’Agglomération est 
          de s’inscrire dans le développement de la culture de proximité, au plus près des habitants et quelque
           soit la taille de la commune. Ce projet s’articule autour des axes suivants : programmation
            de spectacles, sensibilisation à la culture scientifique et technique, et fédération des 
            « Journées Européennes du Patrimoine ».</p></div>
        <img src= {imgPresentation} alt="" className="imgPresentation"></img>
        <div className = "lignes"></div>

      </div>
    </div>
  );
}

export default Culture;