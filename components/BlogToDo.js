import React from 'react'

class BlogToDo extends React.Component {
  render() {
    return(
        <form className="form-inline toDoForm">
          <div className="form-group">
            <label htmlFor="exampleInputName2">To-Do</label>
            <input type="text" className="form-control" placeholder="To-Do"/>
          </div>
          <button type="submit" className="btn btn-default">Add</button>
        </form>
      );
  }
}

export default BlogToDo;