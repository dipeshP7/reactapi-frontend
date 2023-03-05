import dispatcher from "../appDispatcher";
import * as CourseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

/**
 * this is action creator
 * @param {*} course
 */
export function saveCourse(course) {
  /**
   * after calling api save the data to store
   * then it will be updated with react component
   * savecourse is promise base function so after
   * receiving function response we are handling in
   * then funciton.
   */

  /**
   * return is used to notify on changes
   */
  return CourseApi.saveCourse(course).then((savedCourse) => {
    //dispatcher will notify all stores new course is created
    dispatcher.dispatch({
      actionTypes: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return CourseApi.getCourses().then((_courses) => {
    //dispatcher will notify all stores new course is created
    dispatcher.dispatch({
      actionTypes: actionTypes.LOAD_COURSE,
      courses: _courses,
    });
  });
}

export function deleteCourse(id) {
  return CourseApi.deleteCourse(id).then(() => {
    //dispatcher will notify all stores new course is created
    dispatcher.dispatch({
      actionTypes: actionTypes.DELETE_COURSE,
      id: id,
    });
  });
}
