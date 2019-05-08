import React, { Suspense } from 'react';
import { Box, Select, FormField } from 'grommet';
import { ORDERS, MIME_TYPES } from '../../../api';
import { UPDATE_FILTERS } from '../reducer';
import { buildOptions, findCurrentValue } from '../utils';
import { BreedsSelect } from './breedsSelect.component';
// import { Loading } from '../../../components/loading.component';

const ORDERS_OPTIONS = buildOptions(ORDERS);
const MIME_TYPES_OPTIONS = buildOptions(MIME_TYPES);

const selectConfig = { labelKey: 'key', valueKey: 'value' };

export const Filters = ({
  filters: { mime_types, order, breed_id },
  dispatch
}) => {
  return (
    <>
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
        <BreedsSelect dispatch={dispatch} breedId={breed_id} />
      </Box>
    </>
  );
};
