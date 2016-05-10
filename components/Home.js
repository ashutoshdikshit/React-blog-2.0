import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'
import ShowBlog from './ShowOneBlog'

class Home extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1 className="display-3">Welcome to my Blog!</h1>
        <p className="lead">This is a simple blog app built using React. </p>
        <hr className="m-y-2"/>
        <ul>Built Using : 
          <li> ReactJS </li>
          <li> Webpack </li>
          <li> CSS </li>
        </ul>
      </div>
      );
  }
}

export default Home
