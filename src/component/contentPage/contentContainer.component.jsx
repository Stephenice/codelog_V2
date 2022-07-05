import { useState } from "react";
import SearchBox from "../searchBox/searchBox.component";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import ContentResource from "./contentResource.component";

const ContentContainer = () => {
  return (
    <main id="main-doc" className="item main">
      <Header />
      <ContentResource />
      <Footer />
    </main>
  );
};

export default ContentContainer;
