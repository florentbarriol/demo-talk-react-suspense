import React, { useReducer, Suspense } from 'react';
import { reducer, initialState } from './reducer';
import { Filters } from './components/filters.component';
import { Grid } from './components/grid.component';
import { LoadingSuspense } from '../../components/suspense.component';

const Home = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);
  return (
    <main>
      <Suspense fallback={<LoadingSuspense />}>
        <Filters dispatch={dispatch} filters={filters} />
        <Grid filters={filters} />
      </Suspense>
    </main>
  );
};

export default Home;
