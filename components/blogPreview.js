import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class BlogPreview extends React.Component{
  render() {
    const { blog, i} = this.props;
    return (
      <div>
         <div className="blogCard">
            <Link to = {'/ViewBlog/${this.props.blog.id}'}>
              <div className="card-block">
                <h4 className="blogTitle">{blog.title}</h4>
                <p className="card-text">{blog.text}</p>
              </div>
            </Link>

            <CSSTransitionGroup transitionName="like" 
              transitionEnterTimeout = {500}
              transitionLeaveTimeout = {500}>
              <span key={blog.likes}></span>
            </CSSTransitionGroup>

            <figcaption>
              <div className="control-buttons">
                <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts;{blog.likes}</button>

              </div>
            </figcaption>
          </div>

      </div>
      );
  }
}

export default BlogPreview;