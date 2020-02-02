import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import { theme, GlobalStyles } from './utils/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
