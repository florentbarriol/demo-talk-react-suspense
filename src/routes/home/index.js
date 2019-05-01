import React, { useState, useEffect, useReducer } from 'react';
import { getUrlImagesSearch, getAuthenticationHeader } from '../../api';
import { Grid } from 'grommet';
import { reducer, initialState } from './reducer';
import { ResultBox } from './components/resultBox.component';
import { Filters } from './components/filters.component';
import Axios from 'axios';

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await Axios.get(getUrlImagesSearch(state), {
        headers: getAuthenticationHeader()
      });
      console.log(result);
      setData(result.data);
      setLoading(false);
    }

    fetchData();
  }, [state]);

  return (
    <>
      <Filters dispatch={dispatch} state={state} loading={loading} />
      <Grid gap="xsmall" columns="small" rows="small">
        {data.map(block => (
          <ResultBox key={block.id} {...block} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
