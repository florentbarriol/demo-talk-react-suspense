import React from 'react';
import { unstable_createResource as createResrouce } from 'react-cache';
import { Select, FormField } from 'grommet';
import { BREEDS_URL, fetchAPI } from '../../../api';
import { UPDATE_FILTERS } from '../reducer';
import { findCurrentValue } from '../utils';

const APIResource = createResrouce(() => fetchAPI(BREEDS_URL));

export const BreedsSelect = ({ breedId, dispatch }) => {
  const breeds = APIResource.read();

  return (
    <FormField htmlFor="breed" label="Breed">
      <Select
        id="breed"
        valueKey="id"
        labelKey="name"
        options={breeds}
        value={findCurrentValue(
          breedId,
          breeds,
          (option, value) => option.id === value
        )}
        placeholder="Choose a breed"
        onChange={({ option }) =>
          dispatch({
            type: UPDATE_FILTERS,
            filter: 'breed_id',
            value: option.id
          })
        }
      />
    </FormField>
  );
};
