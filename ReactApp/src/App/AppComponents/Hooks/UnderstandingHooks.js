import React, { useCallback, useMemo } from "react";
import Title from "./title";
import Count from "./Count";
import Button from "./button";

function Hooks() { 
    //console.log(`rendering count  ${text}`);
    let [age, setAge] = React.useState(25);
    let [salary, setSalary] = React.useState(50000);

    let incrementSalary = useCallback((evt)=>{
        console.log('Increment Salary')
        setSalary(++salary)
        evt.preventDefault()
    },[salary])

    let incrementAge = useCallback((evt)=>{
        console.log('Increment Age')
        setAge(++age)
        evt.preventDefault()
    },[age])

    //memoizes data and calculates only if the input value is changed
    let isEven = useMemo(()=>{
        console.log("IsEven")
        let i = 1
        while(i < 2000000000) i++; //this is forcefully slowing the processing 

        return age % 2 === 0;
    }, [age]) 

    return (
        <div>
            <Title />

            <Button handleClick={incrementAge}>
                Increment Age
            </Button>
            <Count text="Age" count={age} />
            <span>{isEven ? ' Even' : ' Odd'}</span> 
            {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}
            <hr/>

            <Button handleClick={incrementSalary}>
                Increment Salary
            </Button>
            <Count text="Salary" count={salary} />

        </div>
    )
}

export default Hooks;