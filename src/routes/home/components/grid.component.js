import React from 'react';
import { unstable_createResource } from 'react-cache';
import { Grid as GridWrapper } from 'grommet';
import queryString from 'query-string';
import { IMAGES_SEARCH_URL, fetchAPI } from '../../../api';
import { ResultBox } from './resultBox.component';

const APIResource = unstable_createResource(
  filters => fetchAPI(`${IMAGES_SEARCH_URL}?${queryString.stringify(filters)}`)
  // input => (input.breed_id ? input.breed_id : -1)
);

export const Grid = ({ filters }) => {
  const data = APIResource.read(filters);

  return (
    <GridWrapper gap="xsmall" columns="small" rows="small">
      {data.map((block, index) => (
        <ResultBox key={block.id} {...block} index={index} />
      ))}
    </GridWrapper>
  );
};
