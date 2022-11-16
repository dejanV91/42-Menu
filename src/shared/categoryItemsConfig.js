import menu from "../data";

export const categories = menu
  .filter((item, index, self) => {
    return (
      self.findIndex(({ category }) => {
        return category === item.category;
      }) === index
    );
  })
  .map((item) => {
    console.log(item);
    return item.category;
  })
  .concat("all");
