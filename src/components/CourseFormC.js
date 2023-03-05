import React from "react";
import TextInputC from "./common/TextInputC";

class CourseFormC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let wrapperClass = "form-group";
    if (this.props.errors.length > 0) {
      wrapperClass += " has-error";
    }
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <TextInputC
            id="title"
            name="title"
            label="Title"
            value={this.props.course.title}
            handleChange={this.props.handleChange}
            error={this.props.errors.title}
          />
          {/* <div className={wrapperClass}>
            <label htmlFor="author">Title</label>
            <div className="field">
              <input
                id="title"
                type="text"
                name="title"
                className="form-control"
                value={this.props.course.title}
                onChange={this.props.handleChange}
              />
            </div>
            {this.props.errors.title && (
              <div className="alert alert-danger">
                {this.props.errors.title}
              </div>
            )}
          </div> */}
          <div className={wrapperClass}>
            <label htmlFor="author">Author</label>
            <div className="field">
              <select
                id="author"
                name="authorId"
                value={this.props.course.authorId}
                onChange={this.props.handleChange}
                className="form-control"
              >
                <option value="" />
                <option value="1">Cory House</option>
                <option value="2">Scott Allen</option>
              </select>
            </div>
            {this.props.errors.authorId && (
              <div className="alert alert-danger">
                {this.props.errors.authorId}
              </div>
            )}
          </div>
          <TextInputC
            id="category"
            name="category"
            label="Category"
            value={this.props.course.category}
            handleChange={this.props.handleChange}
            error={this.props.errors.category}
          />
          {/* <div className={wrapperClass}>
            <label htmlFor="author">Category</label>
            <div className="field">
              <input
                id="category"
                type="text"
                name="category"
                className="form-control"
                value={this.props.course.category}
                onChange={this.props.handleChange}
              />
            </div>
            {this.props.errors.category && (
              <div className="alert alert-danger">
                {this.props.errors.category}
              </div>
            )}
          </div> */}
          <input type="submit" value="Save" className="btn btn-primary" />
        </form>
      </>
    );
  }
}

CourseFormC.defaultProps = {
  error: "",
};

export default CourseFormC;
