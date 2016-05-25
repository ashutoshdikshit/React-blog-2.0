import React from 'react'

export default React.createClass({
  render() {
    return ( 
        <div className="col-lg-6">
          <form>
            <fieldset className="form-group">
              <label htmlFor="formGroupExampleInput">Blog Title</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="formGroupExampleInput2">Blog Text</label>
              <textarea className="form-control" id="exampleTextarea" rows="10"></textarea>
            </fieldset>
            <button type="button" className="btn btn-primary">Primary</button>
          </form>
        </div>
      );
  }
})