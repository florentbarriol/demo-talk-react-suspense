import { CAT_API_ROOT, CAT_API_KEY } from './constants';

export const BREEDS_URL = `${CAT_API_ROOT}/breeds`;

export const IMAGES_SEARCH_URL = `${CAT_API_ROOT}/images/search`;

export const IMAGE_PREVIEW_URL = `${CAT_API_ROOT}/images`;

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

export const fetchAPI = url =>
  fetch(url, { headers: { 'x-api-key': CAT_API_KEY } })
    .then(sleeper(isSlowNetwork() ? 2000 : 0))
    .then(response => response.json());

const SESSIONSTORAGE_SLOW_NETWORK = 'slow-network';

export const toggleSlowNetwork = () => {
  sessionStorage.setItem(
    SESSIONSTORAGE_SLOW_NETWORK,
    isSlowNetwork() ? '0' : '1'
  );
};

const getSlowNetwork = () =>
  sessionStorage.getItem(SESSIONSTORAGE_SLOW_NETWORK);

export const isSlowNetwork = () => getSlowNetwork() === '1';

export const sleeper = ms => x =>
  new Promise(resolve => setTimeout(() => resolve(x), ms));
