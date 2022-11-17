import menu from "../data";

export const categories = menu.reduce(
  (container, item) => {
    if (!container.includes(item.category)) {
      container.push(item.category);
    }
    return container;
  },
  ["all"]
);
