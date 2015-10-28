import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddItem from './components/AddItem'
import Item from './components/Item';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/add' handler={AddItem} />
    <Route path='/items/:id' handler={Item} />
  </Route>
);