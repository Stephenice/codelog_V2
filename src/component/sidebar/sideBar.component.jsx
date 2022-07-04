import { useState } from "react";

const SideBar = () => {
  return (
    <nav id="navbar" className="item nav">
      <header className="main-top">
        <div>
          <h1 className="headline">CODELOG</h1>
          <p className="top_title">Front-End Resources</p>
        </div>

        <div className="mobile_cross">
          <span
            className="iconify"
            data-icon="akar-icons:cross"
            data-width="40"
            data-height="40"
          ></span>
        </div>
      </header>

      <div className="mobile_profile_picture">
        <img src="resources/image/profile.jpg" alt="" />
        <div className="mobile_profile_detail">
          <h4>Stephen Ijeh</h4>
          <p>Front-End Developer</p>
        </div>
      </div>

      <ul className="nav-link-container">
        <li className="links">
          <a className="nav-link" href="#tools">
            <span className="iconify" data-icon="feather:tool"></span>Tools
          </a>
        </li>

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
          <a className="nav-link" href="#data_sturcture">
            <span
              className="iconify"
              data-icon="mdi:google-circles-communities"
            ></span>
            BLOGS
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#algorithms">
            <span
              className="iconify"
              data-icon="carbon:machine-learning-model"
            ></span>
            Algorithms
          </a>
        </li>

        <li class="links">
          <a class="nav-link" href="#youtube">
            <span class="iconify" data-icon="feather:youtube"></span>
            Youtube Channel
          </a>
        </li>

        <li className="links">
          <a className="nav-link" href="#howTo">
            <span
              className="iconify"
              data-icon="carbon:machine-learning-model"
            ></span>
            HOW TO
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
