import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  /**
   * we are using TextInput as reusable
   * component
   */
  return (
    <form onSubmit={props.onSubmit}>
      {/* <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={props.course.title}
            onChange={props.onChange}
            error={props.errors.title}
          />
        </div>
      </div> */}
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      {/* <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.course.category}
            onChange={props.onChange}
            error={props.errors.category}
          />
        </div>
      </div> */}
      <TextInput
        label="Category"
        id="category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

CourseForm.defaultProps = {
  error: "",
};

export default CourseForm;
