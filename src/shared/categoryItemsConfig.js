import menu from "../data";

// export const categories = menu
//   .filter((item, index, self) => {
//     return (
//       self.findIndex(({ category }) => {
//         return category === item.category;
//       }) === index
//     );
//   })
//   .map((item) => {
//     return item.category;
//   })
//   .concat("all");

export const categories = menu.reduce(
  (value, item) => {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  },
  ["all"]
);
