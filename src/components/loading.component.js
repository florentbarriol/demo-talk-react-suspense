import React from 'react';
import { Box } from 'grommet';
import { ReactComponent as LoadingSvg } from '../assets/loading.svg';

export const Loading = () => (
  <Box fill align="center" alignContent="center">
    <LoadingSvg />
    <div>Classic mode...</div>
  </Box>
);
