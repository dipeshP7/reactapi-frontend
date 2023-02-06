import React, { useEffect, useState } from "react";
// import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses } from "../actions/courseAction";

function CoursesPageFnC() {
  // const [courses, setCourses] = useState([]);
  const [courses, setCourses] = useState(courseStore.getCourses());

  /**
   * this is withut using flux
   */
  // useEffect(() => {
  //   getCourses().then((courseList) => {
  //     setCourses(courseList);
  //   });
  // }, []);

  /**
   * this is with using flux
   */
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    //call cleanup when component unmount
    return () => courseStore.removeAllListeners(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h1>Course List</h1>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <div className="pt-2"></div>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPageFnC;
