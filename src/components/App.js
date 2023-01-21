import React from "react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Header from "./common/Header";


function App(){

    function getPage(){
        const path = window.location.pathname;
        if(path === "/about") return <AboutUs />
        return <HomePage/> 
    }
    return (
        <>
            <Header/>
            {getPage()}
        </>
    ) 
}

export default App;