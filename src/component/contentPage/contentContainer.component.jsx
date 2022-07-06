import { useState, useEffect } from "react";
import SearchBox from "../searchBox/searchBox.component";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import ContentResource from "./contentResource.component";

const ContentContainer = (props) => {
  const { sectionIconAndName1, boxSet, allData } = props;
  const [navName, setNavName] = useState(null);

  useEffect(() => {
    setNavName(sectionIconAndName1);
  }, [sectionIconAndName1]);

  return (
    <main id="main-doc" className="item main">
      <Header />
      <ContentResource navName={navName} boxSet={boxSet} allData={allData} />
      <Footer />
    </main>
  );
};

export default ContentContainer;
