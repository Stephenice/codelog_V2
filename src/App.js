// import logo from './logo.svg';
// import './App.css';
import SideBar from "./component/sidebar/sideBar.component";
import HeaderMobile from "./component/header/headerMobile.component";
import "./style.css";
import "./media.css";

function App() {
  return (
    <div className="container">
      <HeaderMobile />
      <SideBar />
    </div>
  );
}

export default App;
