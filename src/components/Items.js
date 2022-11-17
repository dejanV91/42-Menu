import React from "react";

function Items({ items }) {
  return items.map((item) => {
    const { id, desc, img, price, title } = item;

    return (
      <article id={id} className="menu-item">
        <img className="photo" src={img} alt={title} />
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
