import React, { useEffect } from "react";
import Buttons from "./components/Buttons";
import menu from "./data";
import { categories } from "./shared/categoryItemsConfig";
import Items from "./components/Items";
import filterItems from "./shared/fliter";

function App() {
  useEffect(() => {
    filterItems(menu);
  }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Buttons categories={categories} />
        </div>
        <div className="section-center">
          <Items items={menu} />
        </div>
      </section>
    </main>
  );
}

export default App;
