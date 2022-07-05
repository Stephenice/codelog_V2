// import logo from './logo.svg';
// import './App.css';
import SideBar from "./component/sidebar/sideBar.component";
import HeaderMobile from "./component/header/headerMobile.component";
import ContentContainer from "./component/contentPage/contentContainer.component";
import "./style.css";
import "./media.css";

function App() {
  return (
    <div className="container">
      <HeaderMobile />
      <SideBar />
      <ContentContainer />
    </div>
  );
}

export default App;
