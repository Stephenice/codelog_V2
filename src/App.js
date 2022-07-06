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
    const setSectionIconAndNameObject = {
      tools: "feather:tool",
      html: "icomoon-free:html-five2",
      css: "iconoir:css3",
      javascript: "teenyicons:javascript-outline",
      fonts: "bi:file-earmark-font",
      colors: "ci:color",
      images: "akar-icons:image",
      icons: "uil:icons",
      design: "clarity:design-line",
      blog: "mdi:google-circles-communities",
      youtube: "feather:youtube",
    };
    setSectionIconAndName(setSectionIconAndNameObject);
  }, []);

  console.log(sectionIconAndName);

  return (
    <div className="container">
      <HeaderMobile title={siteName} titleLogo={logo} />
      <SideBar
        title={siteName}
        titleLogo={logo}
        sectionIconAndName={sectionIconAndName}
      />
      <ContentContainer />
    </div>
  );
}

export default App;
