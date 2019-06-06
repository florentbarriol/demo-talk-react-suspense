import React, { useState, useEffect } from 'react';
import { Select, FormField } from 'grommet';
import { BREEDS_URL, fetchAPI } from '../../../api';
import { UPDATE_FILTERS } from '../reducer';
import { findCurrentValue } from '../utils';
import { Loading } from '../../../components/loading.component';

export const BreedsSelect = ({ breedId, dispatch }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchBreeds() {
      setLoading(true);
      const data = await fetchAPI(BREEDS_URL);
      setBreeds(data);
      setLoading(false);
    }

    fetchBreeds();
  }, []);

  if (loading) return <Loading />;

  return (
    <FormField htmlFor="breed" label="Breed">
      <Select
        id="breed"
        valueKey="id"
        labelKey="name"
        disabled={loading}
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
