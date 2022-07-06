import { useState } from "react";

const HeaderMobile = (props) => {
  const { title, titleLogo } = props;

  return (
    <div className="mobile_header">
      <div className="bar_nav">
        <i
          className="iconify-inline outline"
          data-icon="cil:hamburger-menu"
          data-flip="horizontal,vertical"
          data-width="150"
          data-height="150"
        ></i>
      </div>

      <div className="name">
        <h1 className="headline"> {title}</h1>
        <p className="top_title">{titleLogo}</p>
      </div>
    </div>
  );
};

export default HeaderMobile;
