import NavBar from "./Components/NavBar"
import test from "./Images/thum_privas-6.jpg"
import "./App.css"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <img className="img" src={test} alt=""></img>
    </div>
  );
}

export default App;
