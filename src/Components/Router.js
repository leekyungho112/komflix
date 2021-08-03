import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from 'Routes/Home';
import Movie from 'Routes/Movie';
import Tv from 'Routes/Tv';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Header from './Header';
import Collection from 'Routes/Collection';
import Season from './Season';

export const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie" exact component={Movie} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" exact component={Detail} />
      <Route path="/tv/:id" exact component={Detail} />
      <Route path="/movie/collection/:id" component={Collection} />
      <Route path="/tv/:id/season" component={Season} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
