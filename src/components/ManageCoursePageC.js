import React from "react";
import CourseFormC from "./CourseFormC";
import * as CourseApi from "../api/courseApi";
import { toast } from "react-toastify";

class ManageCoursePageC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        id: null,
        title: "",
        authorId: "",
        category: "",
        slug: "",
      },
      errors: {
        // title: "",
        // authorId: "",
        // category: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (slug) {
      CourseApi.getCourseBySlug(slug).then((_course) =>
        this.setState({ course: _course })
      );
    }
    console.log(slug);
  }

  handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      course: { ...this.state.course, [inputName]: inputValue },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.isFormValid()) return;
    /**
     * Saving course without using flux
     * here we calling save api
     */
    CourseApi.saveCourse(this.state.course).then(() => {
      this.props.history.push("/courses");
      toast.success("Course Saved.");
    });
  }

  isFormValid() {
    const _errors = {};
    // this.setState({ errors: _errors });
    if (!this.state.course.title) _errors.title = "Title is required";
    if (!this.state.course.authorId) _errors.authorId = "Author is required";
    if (!this.state.course.category) _errors.category = "Category is required";

    this.setState({ errors: _errors });

    //this.setState({ errors: { ...this.state.errors, ..._errors } });
    /**
     * if form is valid and error has no properties
     * to return a boolean value which
     * will check if error not contain any property level error
     * also check Object.keys javascript function for more details
     */
    return Object.keys(_errors).length === 0;
  }

  render() {
    return (
      <>
        <h2>Manage Cousre</h2>
        <CourseFormC
          course={this.state.course}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </>
    );
  }
}

export default ManageCoursePageC;
