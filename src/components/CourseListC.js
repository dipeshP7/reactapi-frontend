import React from "react";
import { Link } from "react-router-dom";

class CourseListC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            {this.props.courses.map((course) => {
              return (
                <tr key={course.id}>
                  <td>
                    <Link to={"/course/" + course.slug}>{course.title}</Link>
                  </td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => this.props.handleDeleteCourse(course.id)}
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
}

export default CourseListC;
