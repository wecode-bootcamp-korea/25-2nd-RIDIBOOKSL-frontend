import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './lib/PrivateRoute';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <PrivateRoute exact path="/notification" component={Main} />
        <PrivateRoute exact path="/cart" component={Main} />
        <PrivateRoute exact path="/account" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
