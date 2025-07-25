…or create a new repository on the command line
--echo "# MERN25A" >> README.md


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MishraAshish/MERN25A.git
git push -u origin main


…or push an existing repository from the command line

git remote add origin https://github.com/MishraAshish/MERN25A.git
git branch -M main
git push -u origin main#MERN25

//for subsequst commits

git add .  <for all files created or updated>
git commit -m <commit message>
git push origin main



///////////////////

go to any directory where you want to clone and run below

git clone https://github.com/MishraAshish/MERN25A.git

git clone for the first time

subsequent times we need to run - git pull

if you have changes in your machine - so either you resolve that or use 
git reset --hard and then take git pull

git clean -fd 
git pull



//NPM setup 

// Install express framework
// npm install express

// create server.js file in the same directory
// add npm start command and run as below

// npm start

// start - is the defult command to run the application
// build - is used to build the application for production and to run build scripts
// we need to use
// npm run build


// To detect changes in the code and restart the server automatically, we can use nodemon.
// Install nodemon as a development dependency:
// Dev Dependencies for development, it will not be included in production build
// npm i nodemon -D

// Normal dependencies for production
// npm i express cors body-parser