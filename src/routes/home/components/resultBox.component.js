import React from 'react';
import { Box, Image } from 'grommet';
import queryString from 'query-string';

export const ResultBox = ({ index, url }) => {
  const params = queryString.parse(window.location.search);
  if (Object.keys(params).includes('error') && index === 2) {
    throw new Error('My awesome exception');
  }

  return (
    <Box>
      <Image fit="cover" src={url} />
    </Box>
  );
};
