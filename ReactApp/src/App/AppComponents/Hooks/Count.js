import React from "react";

function Count({ text, count}) { //destructuring of props
    console.log(`rendering count  ${text}`);
    return <h4>{text} - {count}</h4>
}

export default React.memo(Count);