import React, { useState, useEffect } from 'react';
import { Box, Select, FormField } from 'grommet';
import {
  ORDERS,
  MIME_TYPES,
  BREEDS_URL,
  getAuthenticationHeader
} from '../../../api';
import { UPDATE_FILTERS } from '../reducer';
import { filterBreedsByName, buildOptions, findCurrentValue } from '../utils';
import Axios from 'axios';

const ORDERS_OPTIONS = buildOptions(ORDERS);
const MIME_TYPES_OPTIONS = buildOptions(MIME_TYPES);

const selectConfig = { labelKey: 'key', valueKey: 'value' };

export const Filters = ({ state, dispatch, loading }) => {
  const [breedsQuery, setBreedsQuery] = useState(null);
  const [breeds, setBreeds] = useState([]);

  const breedsFilterByName = filterBreedsByName(breeds, breedsQuery);

  useEffect(() => {
    async function fetchBreeds() {
      const result = await Axios.get(BREEDS_URL, {
        headers: getAuthenticationHeader()
      });
      setBreeds(result.data);
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
          value={findCurrentValue(state.order, ORDERS_OPTIONS)}
          disabled={loading}
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
          value={findCurrentValue(state['mime_types'], MIME_TYPES_OPTIONS)}
          disabled={loading}
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
          options={breedsFilterByName}
          value={findCurrentValue(
            state['breed_id'],
            breedsFilterByName,
            (option, value) => option.id === value
          )}
          disabled={loading}
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
