import { useState } from "react";

const SideBarHeader = (props) => {
  const { title, titleLogo } = props;
  return (
    <>
      <header className="main-top">
        <div>
          <h1 className="headline">{title}</h1>
          <p className="top_title">{titleLogo}</p>
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
    </>
  );
};

export default SideBarHeader;
