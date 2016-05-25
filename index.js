import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux' 

import store, { history } from './store';

import BlogToDo from './components/BlogToDo'
import Home from './components/Home'
import App from './components/App'
import NewBlog from './components/NewBlog'
import ReadBlog from './components/ReadBlog'
import ViewBlog from './components/ViewBlog'

render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/ViewBlog/:blogId" component={ViewBlog}/>
          <Route path="/NewBlog" component={NewBlog}/>
          <Route path="/ReadBlog" component={ReadBlog}/>
          <Route path="/BlogToDo" component={BlogToDo}/>
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app'))