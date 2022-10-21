import RapidButton from "../Components/RapidButton"
import test from "../Images/Home/IMG_4495.jpg"
import "./Home.css"
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
              .typeString("Envie de montagne ?")
              .pauseFor(1000)
              .deleteChars(12)
              .typeString("'histoire ?")
              .pauseFor(1000)
              .deleteAll()
              .typeString("BIENVENUE A PRIVAS CENTRE ARDECHE")
              .start()
          }}
        />
      </div>
      <h1 className="ButtonTitle">Notre Communauté</h1>
      <div className="ButtonDiv">
        <RapidButton image={test} text="Présentation" to="/Travaux" />
        <RapidButton image={test} text="Fonctionnement" to="/Travaux" />
        <RapidButton image={test} text="Compétences" to="/Travaux" />
        <RapidButton image={test} text="Communes" to="/Travaux" />
        <RapidButton image={test} text="Territoire" to="/Travaux" />
        <RapidButton image={test} text="Contact" to="/Travaux" />
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
