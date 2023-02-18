import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];
class CourseStore extends EventEmitter {
  /**
   * added change event with callback function
   * @param {*} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * unsubscribing to change events
   * @param {} callback
   */
  removeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChanges() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

/**
 * let create object to get instance
 */
const store = new CourseStore();

/**
 * register the store to dispatcher
 */
dispatcher.register((action) => {
  switch (action.actionTypes) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChanges();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((course) =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChanges();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        (course) => course.id !== parseInt(action.id),
        10
      );
      store.emitChanges();
      break;
    case actionTypes.LOAD_COURSE:
      _courses = action.courses;
      store.emitChanges();
      break;
    default:
    //nothing to do
  }
});

export default store;
