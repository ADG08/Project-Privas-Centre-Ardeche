import "./Culture.css"
import encadreTitre from "../Images/culture/encadre.png"
import imgPresentation from "../Images/culture/img_presentation.png"
import img1 from "../Images/culture/theatreSaison.jpg"
import img2 from "../Images/culture/cultureSaison.jpg"
import soutienArt from "../Images/culture/soutienArt.jpg"
import imgTheatrePrivas from "../Images/culture/theatre4.jpg"

import Slider from "../Components/Slider"

function Culture() {
  return (
    <div className="bodyCulture">

      <div className="premierePart">
        <img src = {encadreTitre} alt = "" className="encadreTitre"></img>
        <h1 className="titre">Culture</h1>
      </div>

      <div className ="deuxiemePart">
        <div className = "lignesV1"></div>
        <div className="banniere">
            <div className="paragraphe"><p>La volonté de la politique culturelle de la Communauté d’Agglomération est 
              de s’inscrire dans le développement de la culture de proximité, au plus près des habitants et quelque
              soit la taille de la commune. Ce projet s’articule autour des axes suivants : programmation
              de spectacles, sensibilisation à la culture scientifique et technique, et fédération des 
              « Journées Européennes du Patrimoine ».</p>
            </div>
            <div><img src= {imgPresentation} alt="" className="imgPresentation"></img></div>
        </div>
        <div className = "lignesV1"></div>
      </div>

      <div className="troisiemePart">
        <h1 className="titreSaison">Saison 2019/2020</h1>
        <div className="saisons">
          <div className="card">
          <img src={img1} class="card-img-top" alt=""></img>
            <div class="card-body">
              <h5 class="card-title">Saison culturelle 19/20</h5>
              <p class="card-text">Nous vous invitons à une nouvelle saison culturelle sur le territoire de la Communauté d’Agglomération Privas Centre Ardèche...</p>
            </div>
          </div>
          <div className="card">
            <img src={img2} class="card-img-top" alt=""></img>
            <div class="card-body">
              <h5 class="card-title">Education Artistique et Culturelle 19/20</h5>
              <p class="card-text">En effet, notre objectif est de rendre le spectacle vivant accessible à toutes et tous, particulièrement aux jeunes et à leurs familles...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pausePart"></div>

      <div className="quatriemePart">
        <h2 className="AnePasRater">- - - &#192; ne pas rater - - -</h2>
        <div className = "lignesV2"></div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <Slider classe="culture"/>
        </div>

        <div className = "lignesV2"></div>
        <div className="article1">
          <div><a href="" className="liens">Soutien matériel aux pratiques artistiques et à la création</a></div>
          <div><img src={soutienArt} alt="" className="img1Part4"></img></div>
        </div>
        <div className = "lignesV2"></div>
        <div className="article2">
          <div><img src={imgTheatrePrivas} alt="" className="img2Part4"></img></div>
          <div><a href="" className="liens">Espace d’art contemporain du Théâtre de Privas</a></div>
        </div>
        <div className = "lignesV2"></div>
      </div>
    </div>
  );
}

export default Culture;