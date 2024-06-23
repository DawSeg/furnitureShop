/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const getNavCategories = ({navigationCategories}) => navigationCategories;
export const getCategoryById = ({ navigationCategories }, categoryId) => {
  const category = navigationCategories.find(
    category => category.id === categoryId || category.name === categoryId
  );
  return category;
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
