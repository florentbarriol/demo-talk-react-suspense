import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Box } from 'grommet';
import queryString from 'query-string';

export const ResultBox = ({ index, id, url }) => {
  const params = queryString.parse(window.location.search);
  if (Object.keys(params).includes('error') && index === 2) {
    throw new Error('My awesome exception');
  }

  return (
    <Link to={`/preview/${id}`}>
      <Box fill>
        <Image fit="cover" src={url} />
      </Box>
    </Link>
  );
};
