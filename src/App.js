import "./App.css";

// #user imports
import Home from "./components/Home";
import Login from "./components/Login";
import RouteHelper from "./components/RouteHelper";
const { login, logout, getUser } = require("./AuthHelper");
function App() {
  return (
    <div className="App">
      <RouteHelper />
    </div>
  );
}

export default App;
