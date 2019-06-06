import React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { Grid as GridWrapper } from 'grommet';
import queryString from 'query-string';
import { IMAGES_SEARCH_URL, fetchAPI } from '../../../api';
import { ResultBox } from './resultBox.component';

const APIResource = createResource(
  filters => fetchAPI(`${IMAGES_SEARCH_URL}?${queryString.stringify(filters)}`),
  filters => Object.values(filters).join('-')
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
