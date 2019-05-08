import React, { useState, useEffect, useReducer } from 'react';
import { Grid } from 'grommet';
import queryString from 'query-string';
import { IMAGES_SEARCH_URL, fetchAPI } from '../../api';
import { reducer, initialState } from './reducer';
import { ResultBox } from './components/resultBox.component';
import { Filters } from './components/filters.component';
import { Loading } from '../../components/loading.component';
// import { ErrorBoundary } from '../../components/errorBoundary.component';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, dispatch] = useReducer(reducer, initialState);

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

  return (
    <>
      <Filters dispatch={dispatch} filters={filters} loading={loading} />
      {loading || !data.length ? (
        <Loading />
      ) : (
        <Grid gap="xsmall" columns="small" rows="small">
          {data.map((block, index) => (
            <ResultBox key={block.id} {...block} index={index} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
