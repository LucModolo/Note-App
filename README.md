# Notes-App

install 
npm i express mongoose cors

to start the backend nodemon server.js

nodemon server.js

To start the frontend

change to folder /frontend
npm start

#
the server.js is not in this repository looks like

const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// Connect to mongoose
mongoose.connect("Hidden Connect string from Mongo Atlas")


//Require route
app.use("/", require("./routes/noteRoute"));


app.listen(3001, function(){
    console.log("express server is running on port 3001");
})



# Notes
# notesApp
# Note-App
