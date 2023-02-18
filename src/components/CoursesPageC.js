import React from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import courseStore from "../stores/courseStore";
import { loadCourses } from "../actions/courseAction";
import CourseListC from "./CourseListC";
import { toast } from "react-toastify";
import { deleteCourse } from "../api/courseApi";

class CoursesPageC extends React.Component {
  state = {
    courses: [],
    //courses: courseStore.getCourses(),
  };

  /**
   * onChange is used for flux
   * @param {} props
   */
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
  }

  onChange() {
    this.setState({ courses: courseStore.getCourses() });
  }

  handleDeleteCourse(courseId) {
    /**
     * code to delete course from api
     * without using flux
     */

    deleteCourse(courseId).then(() => {
      getCourses().then((courselist) => {
        this.setState({ courses: courselist });
      });
      toast.success("Course Deleted. ");
    });
  }

  componentDidMount() {
    /**
     * this code will fetch course api each
     * time to get courses details
     * without flux
     */
    getCourses().then((courseList) => {
      this.setState({ courses: courseList });
    });

    /**
     * this code will fetch courses from
     * flux store
     * With Flux
     */
    // courseStore.addChangeListener(this.onChange);
    // if (courseStore.getCourses().length === 0) loadCourses();
    // return () => courseStore.removeAllListeners(this.onChange);
  }

  render() {
    return (
      <>
        <h1>Course List</h1>
        <Link className="btn btn-primary" to="/course">
          Add Course
        </Link>
        <div className="pt-2"></div>
        {/* <CourseList courses={this.state.courses} /> */}
        <CourseListC
          courses={this.state.courses}
          handleDeleteCourse={this.handleDeleteCourse}
        />
      </>
    );
  }
}

export default CoursesPageC;
