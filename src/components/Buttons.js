function Buttons({ categories, filterItems }) {
  return categories.map((buttonName, index) => (
    <button
      key={index}
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
