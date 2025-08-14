import React, { Component, PureComponent, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import HeaderComponent from "./CommonComponents/HeaderComponent";
import HomeComponent from "./CommonComponents/HomeComponent";
import FooterComponent from "./CommonComponents/FooterComponent";
import About from "./CommonComponents/AboutComponent.jsx"; //complete path with .jsx extension is required
import NotFoundComponent from "./CommonComponents/NotFoundComponent";

export default class Application extends Component {
    constructor(parameters) {
        super(parameters);
        // Initialize state or bind methods if needed
        this.state = {timer: 0};   
        //this.startTimer(); // Start the timer when the component is created 
    }

    // render method is required in class components
    // it returns the JSX to be rendered - and this is termed as the "view" in MVC architecture and virtual DOM in React
    render() {
        return (
            <Router>                
                <Suspense fallback={<div>Loading...</div>}>
                    <HeaderComponent />
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<HomeComponent />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NotFoundComponent />} />
                            {/* <HomeComponent />  
                            <About /> */}
                        </Routes>              
                    <FooterComponent />
                </Suspense>
            </Router>
        );
    }
}