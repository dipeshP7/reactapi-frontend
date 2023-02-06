import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
// import * as CourseApi from "../api/courseApi";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseAction";
import { toast } from "react-toastify";

const ManageCoursepage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  const [courses, setCourses] = useState(courseStore.getCourses());

  /**
   * this method used without using flux
   * to use uncomment courseApi import
   */
  // useEffect(() => {
  //   const slug = props.match.params.slug;
  //   if (slug) {
  //     CourseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
  //   }
  // }, [props.match.params.slug]);

  /**
   * this method used with flux
   */
  useEffect(() => {
    const slug = props.match.params.slug;
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCoursBySlug(slug));
    }
    return () => courseStore.removeAllListeners(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function onChangeHandler1(event) {
    /** one way to set the attribute of course
     * it will only set the title value only
     */
    //const updateCourse = { ...course, title: event.target.value };

    /** Other way to set the attribute of course
     * it will only set the title value only
     */
    // const updateCourse = { ...course };
    // updateCourse.title = event.target.value;

    /**another short way to set the attribute for all change depends upon there name
     * we have used [event.target.name] this will not used as array object
     * it will consider as property of event object
     * in which we can access property or attribute of event object
     */

    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  /** other way to handle onchange event */
  function onChangeHandler2(event) {
    //{target} can be also get like below
    const { target } = event;
    const updateCourse = { ...course, [target.name]: target.value };
    setCourse(updateCourse);
  }

  /** more simple way to handle onchange event */
  function onChangeHandler({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    // CourseApi.saveCourse(course);
    /** calling save api and then
     * redirect to main courses page
     * we used then as CourseApi.saveCourse
     * will return promise object
     */

    /**
     * This method is without flux
     * to use this uncomment courseApi import
     */
    // CourseApi.saveCourse(course).then(() => {
    //   props.history.push("/courses");
    //   toast.success("Course Saved.");
    // });

    /**
     * This method with flux
     */
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved.");
    });
  }

  function formIsValid() {
    /**
     * declare variable using underscore
     * so there will no conflict of same name
     */
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    /**
     * if form is valid and error has no properties
     * to return a boolean value which
     * will check if error not contain any property level error
     * also check Object.keys javascript function for more details
     */
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h2>Manage Course Page</h2>
      {/* {props.match.params.slug} */}
      {/* <CourseForm course={course} onChange={onChangeHandler1} /> */}
      {/* <CourseForm course={course} onChange={onChangeHandler2} /> */}
      <CourseForm
        course={course}
        onChange={onChangeHandler}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default ManageCoursepage;
