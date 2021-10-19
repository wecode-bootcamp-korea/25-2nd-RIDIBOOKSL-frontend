import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
