import React from "react";

function Buttons({ categories, filterItems }) {
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
