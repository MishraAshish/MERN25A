import React, { Component, PureComponent } from "react";
import NameComponent from "./NameComponent";

export default class HomeComponent extends Component {
    constructor(parameters) {
        super(parameters);
        // Initialize state or bind methods if needed
        this.state = {timer: 0};   
        //this.startTimer(); // Start the timer when the component is created 
    }

    // This method is used to start a timer that updates the state every second
    startTimer = () => {
        setInterval(() => {
            this.setState({timer: this.state.timer + 1});
        },1000)
    }

    // render method is required in class components
    // it returns the JSX to be rendered - and this is termed as the "view" in MVC architecture and virtual DOM in React
    render() {
        let val1 = 20, val2 = 10; //example of variable declaration and initialization
        console.log("This is the Application component. Test Hot Reloading!");
        return (
            <div style={{padding: "5px", border: "1px solid red"}}> 
                <div style={{backgroundColor: "lightblue", padding: "5px", border: "1px solid black"}}>
                    <h1>Hello, World!</h1>
                    <h4> Sum : {(val1 + val2)}</h4>
                    <h4> Multiplication : {(val1 * val2)}</h4>
                    <h4> Substraction : {(val1 - val2)}</h4>
                    <h4> Timer : {(this.state.timer)}</h4>
                    <p>This is a simple React component.</p>
                </div>
                
                <NameComponent name="Synergistic IT" id={this.state.timer}/>
            </div>
        );
    }
}