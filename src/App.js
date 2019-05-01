import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Grommet } from 'grommet';
import Home from './routes/home';
import { Header } from './components/header.component';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * { 
    box-sizing: border-box;
  }
`;

const App = () => (
  <Grommet theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Grommet>
);

export default App;
