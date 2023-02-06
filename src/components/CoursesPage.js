import React from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courseList) => {
      this.setState({ courses: courseList });
    });
  }

  render() {
    return (
      <>
        <h1>Course List</h1>
        <Link className="btn btn-primary" to="/course">
          Add Course
        </Link>
        <div className="pt-2"></div>
        <CourseList courses={this.state.courses} />
      </>
    );
  }
}

export default CoursesPage;
