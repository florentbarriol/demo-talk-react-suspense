import React, { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { Filters } from './components/filters.component';
import { Grid } from './components/grid.component';
// import { ErrorBoundary } from '../../components/errorBoundary.component';

const Home = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Filters dispatch={dispatch} filters={filters} />
      <Grid filters={filters} />
    </>
  );
};

export default Home;
