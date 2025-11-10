import React, { Component, PureComponent, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
//import "./style.css";
let HeaderComponent =  lazy(()=> import("./CommonComponents/HeaderComponent"));
let HomeComponent =  lazy(()=> import("./CommonComponents/HomeComponent"));
let FooterComponent =  lazy(()=> import("./CommonComponents/FooterComponent"));
let About =  lazy(()=> import("./CommonComponents/AboutComponent.jsx")); //complete path with .jsx extension is required
let NotFoundComponent =  lazy(()=> import("./CommonComponents/NotFoundComponent"));
let UserComponent =  lazy(()=> import("./AppComponents/User/UserComponent"));
let ProductComponent =  lazy(()=> import("./AppComponents/Product/ProductComponent"));
let CartComponent =  lazy(()=> import("./AppComponents/Cart/CartComponent"));
let Checkout =  lazy(()=> import("./AppComponents/Checkout/CheckoutComponent"));
//import Hooks from "./AppComponents/Hooks/UnderstandingHooks.js";

export default class Application extends Component {
    constructor(parameters){
    
        super();
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
                            <Route path="/login" element={<UserComponent />} />
                            <Route path="/product" element={<ProductComponent />} />
                            <Route path="/cart" element={<CartComponent />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/about/:id/:name" element={<About />} /> 
                            <Route path="*" element={<NotFoundComponent />} />
                            {/* <Route path="/hooks" element={<Hooks />} /> */}
                            {/* <HomeComponent />  
                            <About /> */}
                        </Routes>              
                    <FooterComponent />
                </Suspense>
            </Router>
        );
    }
}

// Create a component with Your name - CommonComponents
// In that component created three div section to display information about you -(not real) with different background colors and boder extension should be .jsx
// Create a navigation link in header to navigate to your component
// Create a route in app.js to render your component