
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateNotes from "./components/CreateNotes";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
//import reportWebVitals from "./reportWebVitals";

//import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Notes" element={<Notes />} />
      <Route path="/CreateNotes" element={<CreateNotes />}>
      </Route>
    </Routes>
  </Router>,
   
  </React.StrictMode>
);

