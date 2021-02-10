// var react = require('react'); we can also write this in react js 
// var reactDom = require('react-dom');

import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { useState } from "react";

// this is javascript ES6 convenstion
const fname = "Shubham";
const lname = "Patel";
const CurrentDate = new Date().toLocaleDateString();


ReactDom.render(
    <>
    <h1>My name is {fname} {lname}</h1>
    <h2>Now Date is {CurrentDate}</h2>
    </>
    ,document.getElementById('root'));


  // reactDom.render(first parameter,second parameter
  // first parameter = what to show on the react dom = this takes jsx
  // second parameter = where to show the react dom = this takes root id

// we passes the document.getElementById("root");