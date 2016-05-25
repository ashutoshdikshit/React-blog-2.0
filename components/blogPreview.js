import React from 'react';
import { Link } from 'react-router';

class BlogPreview extends React.Component{
  render() {
    const { blog, i} = this.props;
    return (
      <Link to = {'/ViewBlog/${this.props.blog.id}'}>
        <div className="blogCard">
          <div className="card-block">
            <h4 className="blogTitle">{blog.title}</h4>
            <p className="card-text">{blog.text}</p>
          </div>
        </div>
      </Link>
      );
  }
}

export default BlogPreview;