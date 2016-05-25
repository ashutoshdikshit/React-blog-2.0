import React from 'react'
import BlogPreview from './blogPreview'

class ReadBlog extends React.Component{
  render() {
    return ( 
        <div>
          <h1> All Blogs </h1>
          <div className="cardContainer">
            {this.props.blogs.map((blog, i) => 
              <BlogPreview {...this.props} key={i} i={i} blog={blog}/>
            )}
          </div>
        </div>
      );
  }
}

export default ReadBlog;