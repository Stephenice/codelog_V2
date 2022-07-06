import { useState, useEffect } from "react";
import SideBarHeader from "./sidebarHeader.component";

const SideBar = (props) => {
  const { title, titleLogo, sectionIconAndName1 } = props;
  const [navName, setNavName] = useState(null);

  useEffect(() => {
    setNavName(sectionIconAndName1);
  }, [sectionIconAndName1]);

  console.log(navName);

  return (
    <>
      <nav id="navbar" className="item nav">
        <SideBarHeader title={title} titleLogo={titleLogo} />

        <ul className="nav-link-container">
          {navName?.map((item) => {
            return (
              <li className="links" key={item.linkID}>
                <a className="nav-link" href={`#${item.linkID}`}>
                  <span className="iconify" data-icon={item.iconName}></span>
                  {item.linkID}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
