import React from "react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";


function App(){

    function getPage(){
        const path = window.location.pathname;
        if(path === "/about") return <AboutUs />
        if(path === "/courses") return <CoursesPage />
        return <HomePage/> 
    }
    return (
        <>
            <div className="container-fluid">
                <Header/>
                {getPage()}
            </div>
        </>
    ) 
}

export default App;