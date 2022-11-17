import menu from "../data";

export const categories = menu.reduce(
  (value, item) => {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  },
  ["all"]
);
