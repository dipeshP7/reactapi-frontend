import React from "react";

class TextInputC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " has-error";
    }

    return (
      <>
        <div className={wrapperClass}>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <div className="field">
            <input
              id={this.props.id}
              type="text"
              name={this.props.name}
              className="form-control"
              value={this.props.value}
              onChange={this.props.handleChange}
            />
          </div>
          {this.props.error && (
            <div className="alert alert-danger">{this.props.error}</div>
          )}
        </div>
      </>
    );
  }
}

export default TextInputC;
