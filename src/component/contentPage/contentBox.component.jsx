import { useState, useEffect } from "react";

const ContentBox = () => {
  return (
    <div class="resource_box box_items">
      <div class="box_img box">
        <img src="./" alt="" />
      </div>
      <div class="box_header box">
        <h3>
          <a href="./" target="_blank">
            name
          </a>
        </h3>
      </div>
      <div class="box_des box">
        <p class="description">description</p>
      </div>
    </div>
  );
};
export default ContentBox;
