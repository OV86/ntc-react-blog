import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddPostsPage from '../components/AddPostsPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/create" component={AddPostsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
