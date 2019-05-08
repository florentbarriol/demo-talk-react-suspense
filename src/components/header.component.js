import React, { useState } from 'react';
import { Box, Heading, Button } from 'grommet';
import { ChapterNext, CaretNext } from 'grommet-icons';
import { toggleSlowNetwork, isSlowNetwork } from '../api';

export const Header = props => {
  const [value, set] = useState(true);
  const ButtonIcon = isSlowNetwork() ? (
    <CaretNext size="small" />
  ) : (
    <ChapterNext size="small" />
  );

  const handlerOnClick = () => {
    toggleSlowNetwork();
    set(!value);
  };

  return (
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
      <Button icon={ButtonIcon} onClick={handlerOnClick} />
    </Box>
  );
};
