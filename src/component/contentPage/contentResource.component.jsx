import { useState } from "react";
import ContentBox from "./contentBox.component";

const ContentResource = () => {
  return (
    <div>
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
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
          </div>
        </article>
      </section>
    </div>
  );
};

export default ContentResource;
