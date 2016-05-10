import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'
import ShowBlog from './ShowOneBlog'

class ViewBlog extends React.Component {
  render() {
    return(
      <div className="col-lg-8">
        <ShowBlog/>
      </div>
      );
  }
}

export default ViewBlog
