import NavBar from "./Components/NavBar"
import RapidButton from "./Components/RapidButton";
import BackgroundImageTop from "./Images/thum_privas-6.jpg"
import "./App.css"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <img className="img" src={BackgroundImageTop} alt=""></img>
      <RapidButton></RapidButton>
    </div>
  );
}

export default App;
