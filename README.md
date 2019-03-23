## About the app 
I used a package called 'create-react-app' to spin up the bones of a react app quickly.<br> 
The main App.js file contains the bulk of the code, and I could definitely extract certain 
components out into their own Component.<br> 
Styling wise, I just used what create-react-app created for me, I figured this assignment 
was more about the functionality rather than the aesthetics.<br>
Since you guys currently build React apps, you may be able to skip several steps below


## How to run the app 
1) Download and Install Node.JS (Skip if already installed on your machine)<br>
    https://nodejs.org/en/download/ 
2) Getting the source code <br>
    Option 1) Clone the repository from github. From a terminal window, run: git clone https://github.com/conklin20/Worksmith.git <br>
    Option 2) I have shared a compiled version with you via Google Drive. <br>
              You should be able to see/download a folder called Worksmith.zip (please let me know if you cannot)<br>
              Extact the files (I zipped them using 7-Zip)<br>
3) Open the project called "Worksmith" with a code/text editor (I used Visual Studio Code to write it)
4) Open a new terminal
5) cd to the Worksmith directory, if not already there
6) Run the following command to install node_modules (only if you went with Option 1 in Step 2, which doesnt inlude the node_modules) <br>
    npm install
5) Run the following command <br>
    npm install -g serve
6) Run the following command to build the app (only if you went with Option 1 in Step 2, as this solution hasnt been built yet) <br>
    npm run build
7) Then run this command, to start the app up <br>
    serve -s build
8) The app should now be running on your localhost on port 5000 <br>
    http://localhost:5000/

