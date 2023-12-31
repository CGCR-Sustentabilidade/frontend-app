import { Outlet } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar /> 
      <Outlet />
    </div>
  );
}
export default App;
