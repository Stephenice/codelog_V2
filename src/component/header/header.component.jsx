import { useState } from "react";
import SearchBox from "../searchBox/searchBox.component";

const Header = () => {
  return (
    <header className="main-top top">
      <SearchBox />
      <div className="profile-container">
        <img src="resources/image/profile.jpg" alt="" />
        <div className="profile_name">
          <h3>Stephen Ijeh</h3>
        </div>
        <ul className="profile_icon">
          <li>
            <span
              className="iconify"
              data-icon="dashicons:arrow-down-alt2"
            ></span>
            <ul className="Profile_subnav_content">
              <li>
                <a
                  href="https://stephenice.github.io/personal-portfolio.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://stephenice.github.io/personal-portfolio.github.io/#Contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
