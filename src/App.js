import React, { useState } from "react";
import Buttons from "./components/Buttons";
import menu from "./data";
import { categories } from "./shared/categoryItemsConfig";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState(menu);

  const filterItems = (e) => {
    const buttonName = e.target.getAttribute("name");
    if (buttonName === "all") {
      setItems(menu);
      return menu;
    } else {
      const newMenu = menu.filter((item) => buttonName === item.category);
      setItems(newMenu);
      return newMenu;
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Buttons categories={categories} filterItems={filterItems} />
        </div>
        <div className="section-center">
          <Items items={items} />
        </div>
      </section>
    </main>
  );
}

export default App;
