import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './lib/PrivateRoute';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Category from './pages/Category/Category';
import BookList from './pages/BookList/BookList';
import Author from './pages/Author/Author';
import Signup from './pages/Login/Signup/Signup';
import Notification from './pages/Notification/Notification';
import Admin from './pages/Notification/Admin';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Signup} />
        <Route exact path="/admin" component={Admin} />
        <>
          <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/category/:id" component={BookList} />
          <Route exact path="/author/:id" component={Author} />
          <PrivateRoute exact path="/notification" component={Notification} />
          <PrivateRoute exact path="/cart" component={Main} />
          <PrivateRoute exact path="/account" component={Main} />
          <Footer />
        </>
      </Switch>
    </Router>
  );
};

export default Routes;
