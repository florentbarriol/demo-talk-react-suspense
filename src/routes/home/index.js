import React, { useReducer, Suspense } from 'react';
import { reducer, initialState } from './reducer';
import { Filters } from './components/filters.component';
import { Grid } from './components/grid.component';
import { LoadingSuspense } from '../../components/loadingSuspense.component';
// import { ErrorBoundary } from '../../components/errorBoundary.component';

const Home = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <Filters dispatch={dispatch} filters={filters} />
      <Suspense fallback={<LoadingSuspense />}>
        <Grid filters={filters} />
      </Suspense>
    </main>
  );
};

export default Home;
