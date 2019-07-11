import React, { useState, useEffect } from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { Image, Box } from 'grommet';
import { fetchAPI, IMAGE_PREVIEW_URL } from '../../../api';
import { Loading } from '../../../components/loading.component';

const APIResource = createResource(id => fetchAPI(`${IMAGE_PREVIEW_URL}/${id}`));

export const ImagePreview = ({ id }) => {
  const item = APIResource.read(id);

  const { url } = item;

  return (
    <Box width="medium" height="medium" margin="auto">
      <Image fit="cover" src={url} />
    </Box>
  );
};
