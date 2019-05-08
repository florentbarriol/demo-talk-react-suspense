import React, { useState, useEffect } from 'react';
import { Box, Select, FormField } from 'grommet';
import { ORDERS, MIME_TYPES, BREEDS_URL, fetchAPI } from '../../../api';
import { UPDATE_FILTERS } from '../reducer';
import { filterBreedsByName, buildOptions, findCurrentValue } from '../utils';

const ORDERS_OPTIONS = buildOptions(ORDERS);
const MIME_TYPES_OPTIONS = buildOptions(MIME_TYPES);

const selectConfig = { labelKey: 'key', valueKey: 'value' };

export const Filters = ({
  filters: { mime_types, order, breed_id },
  dispatch
}) => {
  const [breedsQuery, setBreedsQuery] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState([]);

  const breedsFilterByName = filterBreedsByName(breeds, breedsQuery);

  useEffect(() => {
    async function fetchBreeds() {
      setLoading(true);
      const data = await fetchAPI(BREEDS_URL);
      setBreeds(data);
      setLoading(false);
    }

    fetchBreeds();
  }, []);

  return (
    <Box
      margin="medium"
      direction="row"
      border="bottom"
      justify="between"
      pad={{ bottom: 'small' }}
    >
      <FormField htmlFor="order" label="Order">
        <Select
          {...selectConfig}
          id="order"
          options={ORDERS_OPTIONS}
          value={findCurrentValue(order, ORDERS_OPTIONS)}
          onChange={({ option }) =>
            dispatch({
              type: UPDATE_FILTERS,
              filter: 'order',
              value: option.value
            })
          }
        />
      </FormField>
      <FormField htmlFor="type" label="Type">
        <Select
          {...selectConfig}
          id="type"
          options={MIME_TYPES_OPTIONS}
          value={findCurrentValue(mime_types, MIME_TYPES_OPTIONS)}
          onChange={({ option }) =>
            dispatch({
              type: UPDATE_FILTERS,
              filter: 'mime_types',
              value: option.value
            })
          }
        />
      </FormField>
      <FormField htmlFor="breed" label="Breed">
        <Select
          id="breed"
          valueKey="id"
          labelKey="name"
          disabled={loading}
          options={breedsFilterByName}
          value={findCurrentValue(
            breed_id,
            breedsFilterByName,
            (option, value) => option.id === value
          )}
          placeholder="Choose a breed"
          onSearch={query => setBreedsQuery(query)}
          searchPlaceholder="Search a breed"
          onChange={({ option }) =>
            dispatch({
              type: UPDATE_FILTERS,
              filter: 'breed_id',
              value: option.id
            })
          }
        />
      </FormField>
    </Box>
  );
};
