import { useState, useEffect } from "react";
import SideBarHeader from "./sidebarHeader.component";

const SideBar = (props) => {
  const [navName, setNavName] = useState();
  const { title, titleLogo, sectionIconAndName } = props;
  console.log(sectionIconAndName);

  return (
    <nav id="navbar" className="item nav">
      <SideBarHeader title={title} titleLogo={titleLogo} />

      <ul className="nav-link-container">
        <li className="links">
          <a className="nav-link" href="#tools">
            <span className="iconify" data-icon="feather:tool"></span>Tools
          </a>
        </li>

        {/** 
        <li className="links">
          <a className="nav-link" href="#html">
            <span
              className="iconify"
              data-icon="icomoon-free:html-five2"
            ></span>
            HTML
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#css">
            <span className="iconify" data-icon="iconoir:css3"></span>CSS
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#javascript">
            <span
              className="iconify"
              data-icon="teenyicons:javascript-outline"
            ></span>
            JavaScript
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#fonts">
            <span className="iconify" data-icon="bi:file-earmark-font"></span>
            Fonts
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#colors">
            <span className="iconify" data-icon="ci:color"></span>Color
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#images">
            <span className="iconify" data-icon="akar-icons:image"></span>Images
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#icons">
            <span className="iconify" data-icon="uil:icons"></span>Icons
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#design">
            <span className="iconify" data-icon="clarity:design-line"></span>
            Design
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#blog">
            <span
              className="iconify"
              data-icon="mdi:google-circles-communities"
            ></span>
            BLOGS
          </a>
        </li>

        <li class="links">
          <a class="nav-link" href="#youtube">
            <span class="iconify" data-icon="feather:youtube"></span>
            Youtube Channel
          </a>
        </li>
        */}
      </ul>
    </nav>
  );
};

export default SideBar;
