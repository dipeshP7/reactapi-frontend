import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  /**
   * we are using wrapper class
   * for if bootstrap has-error
   * it should add has-error class
   * with form-group
   *  */
  let wrapperClass = "form-group";
  /** as we defined PropTypes so props.error
   * condition check is not required.
   */
  //   if (props.error && props.error.length > 0) {
  //     wrapperClass += " has-error";
  //   }
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
