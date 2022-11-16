import React, { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import menu from "./data";
import { categories } from "./shared/categoryItemsConfig";

function App() {
  const [data, setData] = useState(menu);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {<Buttons categories={categories} />}
        </div>
        <div className="section-center"></div>
      </section>
    </main>
  );
}

export default App;
