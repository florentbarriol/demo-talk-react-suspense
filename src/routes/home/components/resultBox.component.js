import React from 'react';
import { Box, Image } from 'grommet';

export const ResultBox = ({ url }) => (
  <Box>
    <Image fit="cover" src={url} />
  </Box>
);
