import React from "react";

function Buttons({ categories }) {
  return categories.map((item) => (
    <button type="button" className="filter-btn">
      {item}
    </button>
  ));
}

export default Buttons;
