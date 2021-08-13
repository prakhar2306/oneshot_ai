import React ,{ useState, useEffect } from "react";
import { Router } from "@reach/router";
import {withRouter} from 'react-router-dom';
import CollegeDetails from "./CollegeDetails";
import CollegeList from "./CollegeList";
import StudentInfo from "./StudentInfo";
import "./inte.css";

export default function RightSection() {
const [show,setshow]=useState(true);
  const currentURL = window.location.pathname;
  console.log(show);
  useEffect(()=> {
      if(currentURL=== "/")
      setshow(true);
      else
      setshow(false);
  });


  return (
    <div
      style={{
        width: window.innerWidth <= 500 ? "90%" : "50%",
        margin: "auto",
        height: "90vh",
        backgroundcolor: "black",
      }}
    >
 <div  className={show ? "" : "hide"} >
<p> Hello  I am Prakhar Shukla,

 With help of Mongo Database, Node.js and React I created some mock fake data with 100 colleges  and 100 students in each college.
 The pie charts created with help of @nivo/pie here represent the percentage of courses and states.</p>
 </div>
      <Router>
        <CollegeList path="list/:type" />
        <CollegeDetails path="college_details" />
        <StudentInfo path="student_details" />
      </Router>
    </div>
  );
}
