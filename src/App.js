import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Grommet } from 'grommet';
import Home from './routes/home';
import Preview from './routes/preview';
import { Header } from './components/header.component';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * { 
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
`;

const App = () => (
  <Grommet theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/preview/:id" component={Preview} />
      </Switch>
    </BrowserRouter>
  </Grommet>
);

export default App;
