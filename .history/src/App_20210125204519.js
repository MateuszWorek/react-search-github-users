import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact={ true }>
        <Dashboard></Dashboard>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="*">
        <Error></Error>
      </Route>
    </Router>
  );
}

export default App;
