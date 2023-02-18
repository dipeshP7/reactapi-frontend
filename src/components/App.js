import React from "react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Header from "./common/Header";
import CoursesPageC from "./CoursesPageC";
import CoursesPageFnC from "./CoursesPageFnC";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ManageCoursepageFnC from "./ManageCoursePageFnC";
import ManageCoursePageC from "./ManageCoursePageC";

function App() {
  // function getPage() {
  //   const path = window.location.pathname;
  //   if (path === "/about") return <AboutUs />;
  //   if (path === "/courses") return <CoursesPage />;
  //   return <HomePage />;
  // }
  return (
    <>
      <div className="container-fluid">
        <ToastContainer autoClose="3000" hideProgressBar />
        <Header />
        {/* {getPage()} */}
        {/** routing using react router dom
         * exact attribute will follow only strict url type
         */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursesPageC} />
          {/* <Route path="/courses" component={CoursesPageFnC} /> */}
          <Route path="/about" component={AboutUs} />
          {/* <Route path="/course/:slug" component={ManageCoursepageFnC} /> */}
          <Route path="/course/:slug" component={ManageCoursePageC} />
          {/* <Route path="/course" component={ManageCoursepageFnC} /> */}
          <Route path="/course" component={ManageCoursePageC} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}
export default App;
