export const filterBreedsByName = (breeds, query) => {
  if (query) {
    const formatQuery = query.toLowerCase();
    return breeds.filter(breed =>
      breed.name.toLowerCase().includes(formatQuery)
    );
  }
  return breeds;
};

export const findCurrentValue = (value, options, callback = defaultCallback) =>
  options.find(option => callback(option, value));

export const buildOptions = object =>
  Object.keys(object).map(key => ({ key, value: object[key] }));

const defaultCallback = (option, value) => option.value === value;
