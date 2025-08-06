// Single page application using react

// a single page will render entire application 
// page routes will be managed by react router on the browser history and no request will be made to the server
// we will have only one index.html file which will be served by the server
// all the other pages will be rendered by react router which will be bundled by webpack

// webpack will bundle all the react components and the react router
// webpack will be used to create loaders (other library properties) and plugins (webpack plugins) to optimize the bundle size
// webpack will also create a development server to serve the application
// webpack will also create a production build of the application
// webpack will also create a source map for debugging the application
// webpack will also create a hot module replacement for the application

// webpack will be used a bundler, task runner and a development server

// babel will be used to transpile the code from ES6 to ES5 and react code to browser compatible code
// plugins for minification, uglification, and optimization will be used to reduce the bundle size
// we'll use loaders for css, images, fonts, and other assets - to bundle them and then compress them if needed
// we can also use plugins for code splitting, tree shaking, and other optimizations

// npm init -y

// npm i webpack webpack-cli webpack-dev-server -D

// npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D

// npm i style-loader css-loader -D
// npm i html-webpack-plugin -D

 // npm i react react-dom react-router-dom