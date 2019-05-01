import React from 'react';
import { Box, Heading } from 'grommet';

export const Header = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad="medium"
    {...props}
  >
    <Heading level="3">Cat Image App</Heading>
  </Box>
);
