import { ORDERS, MIME_TYPES, SIZES } from '../../api';

export const initialState = {
  limit: 20,
  breed_id: '',
  page: 0,
  order: ORDERS.RANDOM,
  mime_types: MIME_TYPES.ALL,
  size: SIZES.THUMBNAIL
};

export const UPDATE_FILTERS = 'filters/update';
export const RESET_FILTERS = 'filters/reset';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        [action.filter]: action.value
      };
    case RESET_FILTERS:
    default:
      return state;
  }
};
