import React from "react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
// import CoursesPageFnC from "./CoursesPageFnC";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";

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
        <Header />
        {/* {getPage()} */}
        {/** routing using react router dom
         * exact attribute will follow only strict url type
         */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
