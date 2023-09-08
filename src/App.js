import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="wrapper">
      <HomePage>
        <NavBar />
      </HomePage>
    </div>
  );
}

export default App;
