import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Box } from 'grommet';
import queryString from 'query-string';

export const ResultBox = ({ index, id, url }) => {
  // Code to demonstrate the errorBoundary component
  // simply add `?error` in the url to see the errorBoundary component works
  const params = queryString.parse(window.location.search);
  if (Object.keys(params).includes('error') && index === 2) {
    throw new Error('Oups, error !');
  }

  return (
    <Link to={`/preview/${id}`}>
      <Box fill>
        <Image fit="cover" src={url} />
      </Box>
    </Link>
  );
};
