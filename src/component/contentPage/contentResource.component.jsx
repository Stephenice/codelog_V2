import { useState } from "react";
import ContentBox from "./contentBox.component";

const ContentResource = (props) => {
  const { navName, boxSet, allData } = props;
  // console.log(allData);

  // function setBoxFuncton(arg) {
  //   for (let index = 0; index < allData.length; index++) {
  //     if (arg === allData[index].section) {
  //       console.log(allData[index].section);
  //       const x = allData[index];
  //       console.log(x);
  //     }
  //   }
  // }

  return (
    <div>
      {navName?.map((data) => {
        return (
          <section
            className="main-section add"
            id={data.linkID}
            key={data.linkIDs}
          >
            <header className="section_header">
              <div className="item header_icon">
                <span className="iconify icon" data-icon={data.iconName}></span>
              </div>

              <div className="item header_headline">{data.linkID}</div>
            </header>

            <article>
              <div className="resource_container tools_box">
                {() => {
                  for (let index = 0; index < allData.length; index++) {
                    if (data.linkID === allData[index].section) {
                      console.log(allData[index].section);
                      const x = allData[index];
                      console.log(x);
                      <ContentBox />;
                    }
                  }
                }}

                {/** 
                {setBoxFuncton(data.linkID)}
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
        **/}
              </div>
            </article>
          </section>
        );
      })}
    </div>
  );
};

export default ContentResource;
