import React from "react";
import menu from "../data";

function Items() {
  return menu.map((item) => {
    const { id, desc, img, price, title } = item;
    return (
      <article id={id} className="menu-item">
        <img src={img} alt={title} />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    );
  });
}

export default Items;
