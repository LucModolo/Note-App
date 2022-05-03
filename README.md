# Notes-App

install on the Backend
npm i express mongoose cors

to start the backend nodemon server.js
# Start the App backend
nodemon server.js

# To start the frontend

change to folder /frontend
npm start


# Add Server.js
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



