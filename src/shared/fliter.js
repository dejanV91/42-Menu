import menu from "../data";

const filterItems = (e) => {
  const buttonName = e.target.getAttribute("name");

  if (buttonName === "all") {
    return menu;
  } else {
    const newMenu = menu.filter((item) => buttonName === item.category);
    return newMenu;
  }
};
export default filterItems;
