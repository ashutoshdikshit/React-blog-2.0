import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Layout from './components/Layout'
import NewBlog from './components/NewBlog'
import ReadBlog from './components/ReadBlog'
import ViewBlog from './components/ViewBlog'

render((
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/ViewBlog" component={ViewBlog}/>
        <Route path="/NewBlog" component={NewBlog}/>
        <Route path="/ReadBlog" component={ReadBlog}/>
      </Route>
    </Router>
  ), document.getElementById('app'))