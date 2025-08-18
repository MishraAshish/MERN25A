// styles - are used to define the look and feel of the application
// bring color, font, layout, etc. to the applications html elements

// styles in browser are defined using CSS (Cascading Style Sheets)
// two ways to define styles in React
// 1. Inline styles - defined in the component using style attribute
// example: <div style={{backgroundColor: "red", padding: "10px"}}>Content</div>

// 2. External stylesheets (.css extension) - defined in a separate file and imported into the component, file
// - mostly used for common styles across the application/pages

// multiple selectors can be used to define styles for different elements
// example: 
// 1. element selector - h1, div, button { color: red; }
// 2. class selector - .myClass { color: blue; }
// 3. id selector - #myId { color: green; }
// 4. pseudo-classes - a:hover { color: orange; }
// 5. pseudo-elements - p::first-line { font-weight: bold; }
// 6. media queries - @media (max-width: 600px) { body { background-color: lightblue; } }
// 7. CSS variables - :root { --main-color: #3498db; } .myClass { color: var(--main-color); }
// 8. CSS animations - @keyframes myAnimation { from { opacity: 0; } to { opacity: 1; } }
// 9. CSS transitions - .myClass { transition: background-color 0.3s ease; }
// 10. CSS grid and flexbox - .container { display: flex; } .grid { display: grid; grid-template-columns: repeat(3, 1fr); }

//Overriding any style property - color: rgb(235, 156, 92)!important; //this can force the style to override other styles