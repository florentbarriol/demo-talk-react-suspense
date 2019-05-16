import React, { useState, useEffect } from 'react';
// import { unstable_createResource as createResource } from 'react-cache';
import { Image, Box } from 'grommet';
import { fetchAPI, IMAGE_PREVIEW_URL } from '../../../api';
import { Loading } from '../../../components/loading.component';

export const ImagePreview = ({ id }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchAPI(`${IMAGE_PREVIEW_URL}/${id}`);

      setItem(data);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  const { url } = item;

  if (loading) return <Loading />;
  return (
    <Box width="medium" height="medium" margin="auto">
      <Image fit="cover" src={url} />
    </Box>
  );
};
