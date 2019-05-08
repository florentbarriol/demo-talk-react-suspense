import React, { useState, useEffect } from 'react';
import { Image, Box, Heading, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { fetchAPI, IMAGE_PREVIEW_URL } from '../../api';
import { Loading } from '../../components/loading.component';

const Preview = ({ match }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { params } = match;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchAPI(`${IMAGE_PREVIEW_URL}/${params.id}`);

      setItem(data);
      setLoading(false);
    }

    fetchData();
  }, [params.id]);

  const { url } = item;

  return (
    <>
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
      {loading ? (
        <Loading />
      ) : (
        <Box width="medium" height="medium" margin="auto">
          <Image fit="cover" src={url} />
        </Box>
      )}
    </>
  );
};

export default Preview;
