import React from "react";
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
        <CourseList courses={this.state.courses} />
      </>
    );
  }
}

export default CoursesPage;
