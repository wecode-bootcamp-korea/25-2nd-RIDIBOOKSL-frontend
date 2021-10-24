import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './lib/PrivateRoute';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Category from './pages/Category/Category';
import BookList from './pages/BookList/BookList';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/category/:id" component={BookList} />
        <PrivateRoute exact path="/notification" component={Main} />
        <PrivateRoute exact path="/cart" component={Main} />
        <PrivateRoute exact path="/account" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
