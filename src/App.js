import "./App.css";
import SideBar from "./Components/SideBar";
import Cart from "./Components/Cart";
import Dropdown from "./Components/Dropdown";
function App() {
  return (
    <div className="App">
      <div className="p-3" style={{ height: "100%" }}>
        <div className="row mx-auto">
          <div className="col col-lg-3">
            <SideBar />
            <Dropdown />
          </div>
          <div className="col col-lg-9">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
