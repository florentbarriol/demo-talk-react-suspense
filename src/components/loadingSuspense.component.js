import React from 'react';
import { Box } from 'grommet';
import { ReactComponent as LoadingSvg } from '../assets/loading-dots.svg';

export const LoadingSuspense = () => (
  <Box fill align="center" alignContent="center">
    <LoadingSvg />
    <div>Suspense mode...</div>
  </Box>
);
