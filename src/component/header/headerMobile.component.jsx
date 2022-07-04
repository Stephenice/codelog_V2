import { useState } from "react";

const HeaderMobile = () => {
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
        <h1 className="headline"> CODELOG</h1>
        <p className="top_title">Front-End Resources</p>
      </div>
    </div>
  );
};

export default HeaderMobile;
