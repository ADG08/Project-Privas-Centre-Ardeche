import RapidButton from "../Components/RapidButton"
import BackgroundImageTop from "../Images/Home/thum_privas-6.jpg"
import test from "../Images/Home/IMG_4495.jpg"
import "./Home.css"
import Slider from "../Components/Slider.js"

function Home() {
  return (
    <div>
      <div className="back">
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
