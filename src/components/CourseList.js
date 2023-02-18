import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CourseList(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((courses) => {
            return (
              <tr key={courses.id}>
                <td>
                  <Link to={"/course/" + courses.slug}>{courses.title}</Link>
                </td>
                <td>{courses.authorId}</td>
                <td>{courses.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      props.deleteCourse(courses.id).then(() => {
                        toast.success("Course Deleted.");
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

//PorpTypes only validate or apply in develment mode only
CourseList.prototype = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
