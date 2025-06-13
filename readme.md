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
