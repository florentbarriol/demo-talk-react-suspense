import queryString from 'query-string';
import { CAT_API_ROOT, CAT_API_KEY } from './constants';

export const BREEDS_URL = `${CAT_API_ROOT}/breeds`;

export const getUrlImagesSearch = params =>
  `${CAT_API_ROOT}/images/search?${queryString.stringify(params)}`;

export const getAuthenticationHeader = () => ({ 'x-api-key': CAT_API_KEY });

export const SIZES = {
  FULL: 'full',
  MEDIUM: 'med',
  SMALL: 'small',
  THUMBNAIL: 'thumb'
};

export const ORDERS = {
  DESC: 'Desc',
  ASC: 'Asc',
  RANDOM: 'Random'
};

export const MIME_TYPES = {
  ALL: '',
  STATIC: 'jpg,png',
  ANIMATED: 'gif'
};
