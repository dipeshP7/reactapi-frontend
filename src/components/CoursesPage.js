import React from "react";
import { getCourses } from "../api/courseApi"

class CoursesPage extends React.Component{
    state={
        courses: []
    }

    componentDidMount(){
        getCourses().then((courseList) => {
            this.setState({courses: courseList})
        });
    }

    render(){
        return(
            <>
                <h1>Course List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author Id</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map(courses => {
                            return (
                                <tr key={courses.id}>
                                    <td>{courses.title}</td>
                                    <td>{courses.authorId}</td>
                                    <td>{courses.category}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }

}

export default CoursesPage;
