import React, { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { Filters } from './components/filters.component';
import { Grid } from './components/grid.component';

const Home = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <Filters dispatch={dispatch} filters={filters} />
      <>
        <Grid filters={filters} />
      </>
    </main>
  );
};

export default Home;
