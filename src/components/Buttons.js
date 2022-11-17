import React from "react";
import filterItems from "../shared/fliter";

function Buttons({ categories }) {
  return categories.map((buttonName) => (
    <button
      type="button"
      name={buttonName}
      className="filter-btn"
      onClick={filterItems}
    >
      {buttonName}
    </button>
  ));
}

export default Buttons;
