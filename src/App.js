import { useState, useEffect } from "react";
import SideBar from "./component/sidebar/sideBar.component";
import HeaderMobile from "./component/header/headerMobile.component";
import ContentContainer from "./component/contentPage/contentContainer.component";
import "./style.css";
import "./media.css";

function App() {
  const [siteName, setSiteName] = useState("CODELOG");
  const [logo, setLogo] = useState("Front-End Resources");
  const [sectionIconAndName, setSectionIconAndName] = useState(null);

  useEffect(() => {
    fetch(`./section.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    const setSectionIconAndNameObject = [
      { linkID: "tools", iconName: "feather:tool" },
      { linkID: "html", iconName: "icomoon-free:html-five2" },
      { linkID: "css", iconName: "iconoir:css3" },
      { linkID: "javascript", iconName: "teenyicons:javascript-outline" },
      { linkID: "fonts", iconName: "bi:file-earmark-font" },
      { linkID: "colors ", iconName: "ci:color" },
      { linkID: "images", iconName: "akar-icons:image" },
      { linkID: "icons", iconName: "uil:icons" },
      { linkID: "design", iconName: "clarity:design-line" },
      { linkID: "blog", iconName: "mdi:google-circles-communities" },
      { linkID: "youtube", iconName: "feather:youtube" },
    ];
    setSectionIconAndName(setSectionIconAndNameObject);
  }, []);

  return (
    <div className="container">
      <HeaderMobile title={siteName} titleLogo={logo} />
      <SideBar
        title={siteName}
        titleLogo={logo}
        sectionIconAndName1={sectionIconAndName}
      />
      <ContentContainer />
    </div>
  );
}

export default App;
