import React, { useState, useEffect } from 'react';
import { Grid as GridWrapper } from 'grommet';
import queryString from 'query-string';
import { IMAGES_SEARCH_URL, fetchAPI } from '../../../api';
import { ResultBox } from './resultBox.component';
import { Loading } from '../../../components/loading.component';

export const Grid = ({ filters }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchAPI(
        `${IMAGES_SEARCH_URL}?${queryString.stringify(filters)}`
      );
      console.log(data);
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, [filters]);

  if (loading || !data.length) return <Loading />;

  return (
    <GridWrapper gap="xsmall" columns="small" rows="small">
      {data.map((block, index) => (
        <ResultBox key={block.id} {...block} index={index} />
      ))}
    </GridWrapper>
  );
};
