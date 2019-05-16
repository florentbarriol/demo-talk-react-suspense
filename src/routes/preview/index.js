import React, { Suspense } from 'react';
import { Box, Heading, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { ImagePreview } from './components/ImagePreview.component';
import { LoadingSuspense as Loading } from '../../components/loadingSuspense.component';

const Preview = ({ match }) => {
  const { params } = match;

  return (
    <main>
      <Box
        margin="medium"
        direction="row"
        border="bottom"
        justify="between"
        pad={{ bottom: 'small' }}
      >
        <Heading level={2}>Preview</Heading>
        <Link to="/">
          <Button icon={<FormPreviousLink size="medium" color="brand" />} />
        </Link>
      </Box>
      <>
        <ImagePreview id={params.id} />
      </>
    </main>
  );
};

export default Preview;
