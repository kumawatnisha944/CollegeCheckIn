import React, { useState } from "react";
import "./CollegeSection.css";
import sec1 from "./sec1.png";
import sec2 from "./sec2.png";
import sec3 from "./sec3.png";
import sec4 from "./sec4.png";
import coll1 from "./coll1.jpeg";
import coll2 from "./coll2.jpeg";
import coll3 from "./coll3.jpeg";
import coll4 from "./coll4.jpeg";
import coll5 from "./coll5.jpeg";
import coll6 from "./coll6.jpeg";
import coll7 from "./coll7.jpeg";
import coll8 from "./coll8.jpeg";
import coll9 from "./coll9.jpeg";
import coll10 from "./coll10.jpeg";
import coll11 from "./coll11.jpeg";
import coll12 from "./coll12.jpeg";
import coll13 from "./coll13.jpeg";
import coll14 from "./coll14.jpeg";

import lg7 from "../Banner/lg7.png";
import lg4 from "../Banner/lg4.png";
import lg11 from "../Banner/lg11.png";
import lg6 from "../Banner/lg6.png";
import lg9 from "../Banner/lg9.png";
import lg5 from "../Banner/lg5.png";
import lg2 from "../Banner/lg2.png";
import lg13 from "../Banner/lg13.png";
import lg14 from "../Banner/lg14.png";
import lg1 from "../Banner/lg1.png";
import lg10 from "../Banner/lg10.png";
import lg15 from "../Banner/lg15.png";
import lg16 from "../Banner/lg16.png";
import lg17 from "../Banner/lg17.png";

const courses = ["MBA", "MA", "BA", "B.Com", "BCA", "M.Sc", "BBA", "MCA", "M.Com", "Other"];

const collegeData = {
  "MBA": [
    {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹2,00,000",
      students: "8,000 students enrolled",
      rating: "4.8",
      nirf:"20",
      budget:"2",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹1,99,000",
      students: "11,000 students enrolled",
      rating: "4.7",
      nirf:"27",
      budget:"2",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "5,000 students enrolled",
      rating: "4.6",
      nirf:"32",
      budget:"2",
      image: coll3,
      logo: lg11,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹1,96,000",
      students: "10,000 students enrolled",
      rating: "4.5",
      nirf:"44",
      budget:"2",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Sharda University",
      duration: "2 Years",
      fees: "₹1,40,000",
      students: "6,000 students enrolled",
      rating: "4.5",
      nirf:"46",
      budget:"2",
      image: coll5,
      logo: lg9,
    },
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹2,20,000",
      students: "8,000 students enrolled",
      rating: "4.4",
      nirf:"65",
      budget:"3",
      image: coll6,
      logo: lg5,
    },
        {
      name: "UPES Online",
      duration: "2 Years",
      fees: "₹1,75,000",
      students: "5,000 students enrolled",
      rating: "4.4",
      nirf:"70",
      budget:"2",
      image: coll7,
      logo: lg2,
    },
        {
      name: "MIT Pune Online",
      duration: "2 Years",
      fees: "₹95,000",
      students: "5,000+ students enrolled",
      rating: "4.4",
      nirf:"72",
      budget:"1",
      image: coll8,
      logo: lg13,
    },
        {
      name: "Shoolini University Online",
      duration: "2 Years",
      fees: "₹1,30,000",
      students: "4,000+ students enrolled",
      rating: "4.3",
      nirf:"86",
      budget:"2",
      image: coll9,
      logo: lg14,
    },
        {
      name: "DY Patil University",
      duration: "2 Years",
      fees: "₹1,89,400",
      students: "4,000 students enrolled",
      rating: "4.2",
      nirf:"95",
      budget:"2",
      image: coll10,
      logo: lg1,
    },
        {
      name: "Vignan University",
      duration: "2 Years",
      fees: "₹90,000",
      students: "5,000 students enrolled",
      rating: "4.2",
      nirf:"109",
      budget:"1",
      image: coll11,
      logo: lg10,
    },
        {
      name: "Vivekananda University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "4,500 students enrolled",
      rating: "4.2",
      nirf:"120",
      budget:"2",
      image: coll12,
      logo: lg15,
    },
        {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹1,29,999",
      students: "4,500 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"2",
      image: coll13,
      logo: lg16,
    },
        {
      name: "Yenepoya University Online",
      duration: "2 Years",
      fees: "₹56,000",
      students: "4,500 students enrolled",
      rating: "3.9",
      nirf:"151",
      budget:"1",
      image: coll14,
      logo: lg17,
    },
  ],
  "MA": [
       {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹80,000",
      students: "2,500 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"1",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹1,70,000",
      students: "2,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"2",
      image: coll2,
      logo: lg4,
    },
    {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹60,000",
      students: "3,000 students enrolled",
      rating: "4.6",
      nirf:"120",
      budget:"1",
      image: coll3,
      logo: lg11,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹90,000",
      students: "3,500 students enrolled",
      rating: "4.5",
      nirf:"65",
      budget:"1",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹1,10,000",
      students: "2,000 students enrolled",
      rating: "4.4",
      nirf:"20",
      budget:"1",
      image: coll6,
      logo: lg5,
    },
          {
      name: "Shoolini University Online",
      duration: "2 Years",
      fees: "₹42,000",
      students: "1,000+ students enrolled",
      rating: "4.3",
      nirf:"70",
      budget:"1",
      image: coll9,
      logo: lg14,
    },
          {
      name: "Vivekananda University",
      duration: "2 Years",
      fees: "₹72,000",
      students: "3,000 students enrolled",
      rating: "4.2",
      nirf:"151",
      budget:"1",
      image: coll12,
      logo: lg15,
    },
          {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹1,00,000",
      students: "3,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"1",
      image: coll13,
      logo: lg16,
    },

  ],
    "BA": [
    {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹1,20,000",
      students: "2,500 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"2",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹99,000",
      students: "3,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"1",
      image: coll2,
      logo: lg4,
    },
      {
      name: "Sharda University",
      duration: "2 Years",
      fees: "₹1,05,000",
      students: "4,000 students enrolled",
      rating: "4.5",
      nirf:"86",
      budget:"2",
      image: coll5,
      logo: lg9,
    },
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹1,75,000",
      students: "2,000 students enrolled",
      rating: "4.4",
      nirf:"20",
      budget:"2",
      image: coll6,
      logo: lg5,
    },
      
          {
      name: "Vivekananda University",
      duration: "2 Years",
      fees: "₹72,000",
      students: "4,000 students enrolled",
      rating: "4.2",
      nirf:"151",
      budget:"1",
      image: coll12,
      logo: lg15,
    },
          {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹90,000",
      students: "4,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"1",
      image: coll13,
      logo: lg16,
    },

  ],
    "B.Com": [
     {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹99,000",
      students: "4,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"1",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹1,20,000",
      students: "3,500 students enrolled",
      rating: "4.5",
      nirf:"65",
      budget:"2",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Shoolini University Online",
      duration: "2 Years",
      fees: "₹85,000",
      students: "2,000+ students enrolled",
      rating: "4.3",
      nirf:"70",
      budget:"1",
      image: coll9,
      logo: lg14,
    },
        {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹90,000",
      students: "5,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"1",
      image: coll13,
      logo: lg16,
    },
        {
      name: "Yenepoya University Online",
      duration: "2 Years",
      fees: "₹75,000",
      students: "5,000 students enrolled",
      rating: "3.9",
      nirf:"95",
      budget:"1",
      image: coll14,
      logo: lg17,
    },
  ],
    "BCA": [
       {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "2,000 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"2",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹1,75,000",
      students: "5,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"2",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹1,11,000",
      students: "4,000 students enrolled",
      rating: "4.6",
      nirf:"120",
      budget:"2",
      image: coll3,
      logo: lg11,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹1,35,000",
      students: "10,000 students enrolled",
      rating: "4.5",
      nirf:"65",
      budget:"2",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Sharda University",
      duration: "2 Years",
      fees: "₹1,20,000",
      students: "4,500 students enrolled",
      rating: "4.5",
      nirf:"86",
      budget:"2",
      image: coll5,
      logo: lg9,
    },
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹1,77,000",
      students: "4,000 students enrolled",
      rating: "4.4",
      nirf:"20",
      budget:"2",
      image: coll6,
      logo: lg5,
    },
        {
      name: "UPES Online",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "3,000 students enrolled",
      rating: "4.4",
      nirf:"46",
      budget:"2",
      image: coll7,
      logo: lg2,
    },
        {
      name: "Shoolini University Online",
      duration: "2 Years",
      fees: "₹90,000",
      students: "2,000+ students enrolled",
      rating: "4.3",
      nirf:"70",
      budget:"1",
      image: coll9,
      logo: lg14,
    },
        {
      name: "Vignan University",
      duration: "2 Years",
      fees: "₹1,08,000",
      students: "3,000 students enrolled",
      rating: "4.2",
      nirf:"72",
      budget:"2",
      image: coll11,
      logo: lg10,
    },
        {
      name: "Vivekananda University",
      duration: "2 Years",
      fees: "₹1,32,000",
      students: "4,000 students enrolled",
      rating: "4.2",
      nirf:"151",
      budget:"2",
      image: coll12,
      logo: lg15,
    },
      {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹1,65,000",
      students: "4,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"2",
      image: coll13,
      logo: lg16,
    },
        {
      name: "Yenepoya University Online",
      duration: "2 Years",
      fees: "₹75,000",
      students: "4,000 students enrolled",
      rating: "3.9",
      nirf:"95",
      budget:"1",
      image: coll14,
      logo: lg17,
    },
  ],
    "M.Sc": [
     {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹80,000",
      students: "2,000 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"1",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹2,75,000",
      students: "2,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"3",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹60,000",
      students: "3,000 students enrolled",
      rating: "4.6",
      nirf:"120",
      budget:"1",
      image: coll3,
      logo: lg11,
    }, 
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹1,00,000",
      students: "2,000 students enrolled",
      rating: "4.4",
      nirf:"20",
      budget:"1",
      image: coll6,
      logo: lg5,
    },
   
  ],
 
    "BBA": [
   {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "2,000 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"2",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹1,99,000",
      students: "8,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"2",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹1,11,000",
      students: "5,000 students enrolled",
      rating: "4.6",
      nirf:"120",
      budget:"2",
      image: coll3,
      logo: lg11,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "4,000 students enrolled",
      rating: "4.5",
      nirf:"65",
      budget:"2",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Sharda University",
      duration: "2 Years",
      fees: "₹1,20,000",
      students: "4,000 students enrolled",
      rating: "4.5",
      nirf:"86",
      budget:"2",
      image: coll5,
      logo: lg9,
    },
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹1,75,000",
      students: "3,000 students enrolled",
      rating: "4.4",
      nirf:"20",
      budget:"2",
      image: coll6,
      logo: lg5,
    },
        {
      name: "UPES Online",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "3,000 students enrolled",
      rating: "4.4",
      nirf:"46",
      budget:"2",
      image: coll7,
      logo: lg2,
    },
        {
      name: "Shoolini University Online",
      duration: "2 Years",
      fees: "₹90,000",
      students: "2,000+ students enrolled",
      rating: "4.3",
      nirf:"70",
      budget:"1",
      image: coll9,
      logo: lg14,
    },
        {
      name: "DY Patil University",
      duration: "2 Years",
      fees: "₹1,45,400",
      students: "6,000 students enrolled",
      rating: "4.2",
      nirf:"44",
      budget:"2",
      image: coll10,
      logo: lg1,
    },
        {
      name: "Vignan University",
      duration: "2 Years",
      fees: "₹1,08,000",
      students: "5,000 students enrolled",
      rating: "4.2",
      nirf:"72",
      budget:"2",
      image: coll11,
      logo: lg10,
    },
        {
      name: "Vivekananda University",
      duration: "2 Years",
      fees: "₹1,32,000",
      students: "5,000 students enrolled",
      rating: "4.2",
      nirf:"151",
      budget:"2",
      image: coll12,
      logo: lg15,
    },
        {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹1,65,000",
      students: "5,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"2",
      image: coll13,
      logo: lg16,
    },
        {
      name: "Yenepoya University Online",
      duration: "2 Years",
      fees: "₹75,000",
      students: "5,000 students enrolled",
      rating: "3.9",
      nirf:"95",
      budget:"1",
      image: coll14,
      logo: lg17,
    },
  ],
  "MCA": [
   {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹1,48,000",
      students: "3,000 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"2",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹1,99,000",
      students: "3,500 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"2",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹1,20,000",
      students: "4,500 students enrolled",
      rating: "4.6",
      nirf:"120",
      budget:"2",
      image: coll3,
      logo: lg11,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹1,60,000",
      students: "5,000 students enrolled",
      rating: "4.5",
      nirf:"65",
      budget:"2",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Sharda University",
      duration: "2 Years",
      fees: "₹1,20,000",
      students: "5,000 students enrolled",
      rating: "4.5",
      nirf:"86",
      budget:"2",
      image: coll5,
      logo: lg9,
    },
        {
      name: "Chandigarh University",
      duration: "2 Years",
      fees: "₹1,55,000",
      students: "3,000 students enrolled",
      rating: "4.4",
      nirf:"20",
      budget:"2",
      image: coll6,
      logo: lg5,
    },
        {
      name: "UPES Online",
      duration: "2 Years",
      fees: "₹1,70,000",
      students: "5,000 students enrolled",
      rating: "4.4",
      nirf:"46",
      budget:"2",
      image: coll7,
      logo: lg2,
    },
        {
      name: "Shoolini University Online",
      duration: "2 Years",
      fees: "₹1,30,000",
      students: "4,000+ students enrolled",
      rating: "4.3",
      nirf:"70",
      budget:"2",
      image: coll9,
      logo: lg14,
    },
        {
      name: "Vignan University",
      duration: "2 Years",
      fees: "₹90,000",
      students: "3,000 students enrolled",
      rating: "4.2",
      nirf:"72",
      budget:"1",
      image: coll11,
      logo: lg10,
    },
        {
      name: "Vivekananda University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "3,000 students enrolled",
      rating: "4.2",
      nirf:"151",
      budget:"2",
      image: coll12,
      logo: lg15,
    },
        {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹1,12,499",
      students: "3,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"2",
      image: coll13,
      logo: lg16,
    },
        {
      name: "Yenepoya University Online",
      duration: "2 Years",
      fees: "₹56,000",
      students: "3,000 students enrolled",
      rating: "3.9",
      nirf:"95",
      budget:"1",
      image: coll14,
      logo: lg17,
    },
  ],
    "M.Com": [
      {
      name: "Lovely Professional University",
      duration: "2 Years",
      fees: "₹1,00,000",
      students: "2,500 students enrolled",
      rating: "4.8",
      nirf:"27",
      budget:"1",
      image: coll1,
      logo: lg7,
    },
    {
      name: "Amity University",
      duration: "2 Years",
      fees: "₹1,50,000",
      students: "2,000 students enrolled",
      rating: "4.7",
      nirf:"32",
      budget:"2",
      image: coll2,
      logo: lg4,
    },
        {
      name: "Parul University",
      duration: "2 Years",
      fees: "₹60,000",
      students: "5,000 students enrolled",
      rating: "4.6",
      nirf:"120",
      budget:"1",
      image: coll3,
      logo: lg11,
    },
        {
      name: "Jain University",
      duration: "2 Years",
      fees: "₹1,10,000",
      students: "3,500 students enrolled",
      rating: "4.5",
      nirf:"65",
      budget:"2",
      image: coll4,
      logo: lg6,
    },
        {
      name: "Sharda University",
      duration: "2 Years",
      fees: "₹1,40,000",
      students: "4,000 students enrolled",
      rating: "4.5",
      nirf:"86",
      budget:"2",
      image: coll5,
      logo: lg9,
    },
        {
      name: "Manav Rachna University",
      duration: "2 Years",
      fees: "₹1,00,000",
      students: "5,000 students enrolled",
      rating: "4.1",
      nirf:"151",
      budget:"1",
      image: coll13,
      logo: lg16,
    },
  ],
    "Other": [
     {
      name: "MIT Pune Online",
      duration: "12 Months",
      fees: "₹64,000",
      students: "1,500+ students enrolled",
      rating: "4.4",
      nirf:"109",
      budget:"1",
      image: coll8,
      logo: lg13,
      course:"PGCM - Digital Marketing",
    },
     {
      name: "MIT Pune Online",
      duration: "12 Months",
      fees: "₹64,000",
      students: "5,000+ students enrolled",
      rating: "4.4",
      nirf:"109",
      budget:"1",
      image: coll8,
      logo: lg13,
      course:"PGCM - Business Analytics",
    },
     {
      name: "MIT Pune Online",
      duration: "15 Months",
      fees: "₹95,000",
      students: "3,000+ students enrolled",
      rating: "4.4",
      nirf:"109",
      budget:"1",
      image: coll8,
      logo: lg13,
      course:"PGDM Modern Project Management",
    },
     {
      name: "MIT Pune Online",
      duration: "24 Months",
      fees: "₹90,000",
      students: "5,000+ students enrolled",
      rating: "4.4",
      nirf:"109",
      budget:"1",
      image: coll8,
      logo: lg13,
      course:"PGDM Project Management",
    },
     {
      name: "MIT Pune Online",
      duration: "24 Months",
      fees: "₹95,000",
      students: "2,000+ students enrolled",
      rating: "4.4",
      nirf:"109",
      budget:"1",
      image: coll8,
      logo: lg13,
      course:"PGDM Operation Management",
    },
  ],
};

export default function CollegeSection({ setShowForm }) {
  const [selectedCourse, setSelectedCourse] = useState("MBA");
  

  const data = collegeData[selectedCourse] || [];
  const [activeSection, setActiveSection] = useState("topChoice");

  return (
    <div className="college-section container" id="college-section">

      {/* HEADING */}
      <h2 className="heading text-center">
        Find the perfect college for you
      </h2>

      <div className="mobile-tabs">
  <button onClick={() => setActiveSection("topChoice")}>Top Choice</button>
  <button onClick={() => setActiveSection("nirf")}>Top NIRF</button>
  <button onClick={() => setActiveSection("assured")}>Assured</button>
  <button onClick={() => setActiveSection("budget")}>Budget</button>
</div>

      {/* FILTER BUTTONS */}
      <div className="course-buttons text-center">
        {courses.map((course, index) => (
          <button
            key={index}
            className={`course-btn ${selectedCourse === course ? "active" : ""}`}
            onClick={() => setSelectedCourse(course)}
          >
            {course}
          </button>
        ))}
      </div>

      {/* MAIN SECTION 1st*/}
      <div className={`row mt-5 section ${activeSection === "topChoice" ? "show" : ""}`}>
        {/* LEFT */}
        <div className="col-md-3 left-box text-center">
          <h5>🏆 Students Top Choice</h5>
          <img src={sec1} alt="student" />
        </div>

        {/* RIGHT SLIDER */}
        <div className="col-md-9 slider-container">

          <div className="slider">
            {data.map((item, index) => (
              <div className="college-card" key={index}>

                <div className="image-box">
                  <img src={item.image} alt="" />

                  <div className="rating">
                    ⭐ Students Rated {item.rating}
                  </div>

                  <div className="logo">
                      <img src={item.logo} alt="logo" />
                  </div>
                </div>

                <div className="card-body">
                  <h5>{item.name}</h5>

                  <div className="info">
                    <span>🎓 {selectedCourse}</span>
                    <span>⏱ {item.duration}</span>
                    <span>💰 {item.fees}</span>
                  </div>
                   
                     {/* 👇 NEW LINE */}
                      {selectedCourse === "Other" && item.course && (
                         <p className="course-name">🎓{item.course}</p>
                       )}
                  <p className="students">{item.students}</p>

                  <div className="btn-group">
                    <button className="btn-outline" onClick={() => setShowForm(true)} >
                      Brochure
                    </button>
                    <button className="btn-filled" onClick={() => setShowForm(true)}>
                      Apply
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          

        </div>
      </div>
       {/* MAIN SECTION 2nd*/}
      <div className={`row mt-5 section ${activeSection === "nirf" ? "show" : ""}`}>
        {/* LEFT */}
        <div className="col-md-3 left-box text-center">
          <h5>🏆 Top NIRF Ranked</h5>
          <img src={sec2} alt="student" />
        </div>

        {/* RIGHT SLIDER */}
        <div className="col-md-9 slider-container">

          <div className="slider">
            {data.map((item, index) => (
              <div className="college-card" key={index}>

                <div className="image-box">
                  <img src={item.image} alt="" />

                  <div className="rating">
                    🏆 NIRF # {item.nirf}
                  </div>

                  <div className="logo">
                      <img src={item.logo} alt="logo" />
                  </div>
                </div>

                <div className="card-body">
                  <h5>{item.name}</h5>

                  <div className="info">
                    <span>🎓 {selectedCourse}</span>
                    <span>⏱ {item.duration}</span>
                    <span>💰 {item.fees}</span>
                  </div>
                     {/* 👇 NEW LINE */}
                      {selectedCourse === "Other" && item.course && (
                         <p className="course-name">🎓{item.course}</p>
                       )}
                  <p className="students">{item.students}</p>

                  <div className="btn-group">
                    <button className="btn-outline" onClick={() => setShowForm(true)}>
                      Brochure
                    </button>
                    <button className="btn-filled" onClick={() => setShowForm(true)}>
                      Apply
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          

        </div>
      </div>
       {/* MAIN SECTION 3rd*/}
      <div className={`row mt-5 section ${activeSection === "assured" ? "show" : ""}`}>

        {/* LEFT */}
        <div className="col-md-3 left-box text-center">
          <h5>🏆 Assured Programs</h5>
          <img src={sec3} alt="student" />
        </div>

        {/* RIGHT SLIDER */}
        <div className="col-md-9 slider-container">

          <div className="slider">
            {data.map((item, index) => (
              <div className="college-card" key={index}>

                <div className="image-box">
                  <img src={item.image} alt="" />

                  <div className="rating">
                  👉 Our Recommended 
                  </div>

                  <div className="logo">
                      <img src={item.logo} alt="logo" />
                  </div>
                </div>

                <div className="card-body">
                  <h5>{item.name}</h5>

                  <div className="info">
                    <span>🎓 {selectedCourse}</span>
                    <span>⏱ {item.duration}</span>
                    <span>💰 {item.fees}</span>
                  </div>
                     {/* 👇 NEW LINE */}
                      {selectedCourse === "Other" && item.course && (
                         <p className="course-name">🎓{item.course}</p>
                       )}
                  <p className="students">{item.students}</p>

                  <div className="btn-group">
                    <button className="btn-outline" onClick={() => setShowForm(true)}>
                      Brochure
                    </button>
                    <button className="btn-filled" onClick={() => setShowForm(true)} >
                      Apply
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          

        </div>
      </div>
       {/* MAIN SECTION 4th */}
      <div className={`row mt-5 section ${activeSection === "budget" ? "show" : ""}`}>
        {/* LEFT */}
        <div className="col-md-3 left-box text-center">
          <h5>🏆 Best Budget 💰</h5>
          <img src={sec4} alt="student" />
        </div>

        {/* RIGHT SLIDER */}
        <div className="col-md-9 slider-container">

          <div className="slider">
            {data.map((item, index) => (
              <div className="college-card" key={index}>

                <div className="image-box">
                  <img src={item.image} alt="" />

                  <div className="rating">
                    💰 Under {item.budget} Lakh
                  </div>

                  <div className="logo">
                      <img src={item.logo} alt="logo" />
                  </div>
                </div>

                <div className="card-body">
                  <h5>{item.name}</h5>

                  <div className="info">
                    <span>🎓 {selectedCourse}</span>
                    <span>⏱ {item.duration}</span>
                    <span>💰 {item.fees}</span>
                  </div>
                     {/* 👇 NEW LINE */}
                      {selectedCourse === "Other" && item.course && (
                         <p className="course-name">🎓{item.course}</p>
                       )}
                  <p className="students">{item.students}</p>

                  <div className="btn-group">
                    <button className="btn-outline" onClick={() => setShowForm(true)}>
                      Brochure
                    </button>
                    <button className="btn-filled" onClick={() => setShowForm(true)}>
                      Apply
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          

        </div>
      </div>
      

 

    </div>
  );
}