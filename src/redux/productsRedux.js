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
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const toggleFavourite = payload => ({ payload, type: TOGGLE_FAVOURITE });
export const toggleCompare = payload => ({ payload, type: TOGGLE_COMPARE });
export const removeCompare = payload => ({ payload, type: REMOVE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favourite: !product.favourite }
          : product
      );
    case TOGGLE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, comparison: !product.comparison }
          : product
      );
    case REMOVE_COMPARE:
      return statePart.filter(product => product.id !== action.payload); 
    default:
      return statePart;
  }
}
