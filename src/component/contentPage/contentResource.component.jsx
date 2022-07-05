import { useState } from "react";
import ContentBox from "./contentBox.component";

const ContentResource = () => {
  return (
    <section className="main-section add" id="tools">
      <header className="section_header">
        <div className="item header_icon">
          <span className="iconify icon" data-icon="feather:tool"></span>
        </div>

        <div className="item header_headline">TOOLS</div>
      </header>

      <article>
        <div className="resource_container tools_box">
          <ContentBox />
        </div>
      </article>
    </section>
  );
};

export default ContentResource;
