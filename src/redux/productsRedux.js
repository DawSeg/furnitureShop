/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');

/* action creators */
export const toggleFavourite = payload => ({ payload, type: TOGGLE_FAVOURITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favourite: !product.favourite }
          : product
      );
    default:
      return statePart;
  }
}
