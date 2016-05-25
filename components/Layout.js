import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return ( 
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/Home" className="navbar-brand">React- Blog App</Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/ViewBlog/:Id">View Blogs</Link></li>
                  <li><Link to="/NewBlog">New Blogs</Link></li>
                  <li><Link to="/ReadBlog">Read Blogs</Link></li>
                  <li><Link to="/BlogToDo">Blog To Do</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
          {React.cloneElement(this.props.children, this.props)}
          
        </div>
      );
  }
})