import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPageFnC() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((courseList) => {
      setCourses(courseList);
    });
  }, []);

  return (
    <>
      <h1>Course List</h1>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPageFnC;
