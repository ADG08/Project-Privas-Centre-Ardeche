import "./Home.css"

import presentationImg from "../Images/Home/presentation.png"
import fonctionnementImg from "../Images/Home/fonctionnement.png"
import competenceImg from "../Images/Home/competences.png"
import communeImg from "../Images/Home/communes.png"
import territoireImg from "../Images/Home/territoire.png"
import contactImg from "../Images/Home/contact.png"
import poubellesImg from "../Images/Home/poubelles.jpg"

import RapidButton from "../Components/RapidButton"
import Slider from "../Components/Slider.js"
import Typewriter from "typewriter-effect"

function Home() {
  return (
    <div>
      <div className="back">
        <Typewriter
          onInit={(typewriter) =>{
            typewriter
              .pauseFor(1000)
              .typeString("Envie de s'évader ?")
              .pauseFor(1000)
              .deleteChars(10)
              .typeString("montagne ?")
              .pauseFor(1000)
              .deleteChars(12)
              .typeString("'histoire ?")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Bienvenue à   Privas Centre Ardèche")
              .start()
          }}
        />
      </div>
      <h1 className="ButtonTitle">Notre Communauté</h1>
      <div className="ButtonDiv">
        <RapidButton image={presentationImg} text="Présentation" to="/Travaux" />
        <RapidButton image={fonctionnementImg} text="Fonctionnement" to="/Travaux" />
        <RapidButton image={competenceImg} text="Compétences" to="/Travaux" />
        <RapidButton image={communeImg} text="Communes" to="/Travaux" />
        <RapidButton image={territoireImg} text="Territoire" to="/Travaux" />
        <RapidButton image={contactImg} text="Contact" to="/Travaux" />
      </div>
      <div className="firstCarousel">
        <h1>Les Actus</h1>
        <Slider classe="first"/>
      </div>
      <h1 className="secondCarouselTitle">Info Covid 19</h1>
      <Slider classe="second" />
      
    </div>
  );
}



export default Home;
