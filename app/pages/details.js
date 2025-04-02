"use client";
import { useState, useEffect } from "react";
import Header from "../components/head";
import Banner from "../components/banner";
import ImageGrid from "../components/imageswtext";
import FooterAll from "../components/footerall";
import axios from "../utils/axios";
import CardsSwipperComponent from "../components/swipper";

export default function ProjectDetail({ params }) {
  const [links, setLinks] = useState(null);  // State for holding fetched data

  // Fetch the data when the component mounts
  useEffect(() => {
    axios.get("/settings")
      .then((response) => {
        setLinks(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);  // Handle any error in fetching
  }, []);  // Empty dependency array ensures it only runs once when the component mounts

  const [projects, setProjects] = useState(null);  // State for holding fetched data
  
  // Fetch the data when the component mounts
  useEffect(() => {
    axios.get("/projects")
      .then((response) => {
        setProjects(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);  // Handle any error in fetching
  }, []);  // Empty dependency array ensures it only runs once when the component mounts
  
  const [metas, setMetas] = useState(null);  // State for holding fetched data

  // Fetch the data when the component mounts
  useEffect(() => {
    axios.get("/page/home")
      .then((response) => {
        setMetas(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);  // Handle any error in fetching
  }, []);  // Empty dependency array ensures it only runs once when the component mounts

  // Debugging output to check params and projects data
  useEffect(() => {
    console.log("Params ID: ", params.id); // Log params.id
    console.log("Projects Data: ", projects?.data); // Log the projects.data array
  }, [params, projects]);

  if (!projects) return <p>Loading...</p>; // Handle case if projects are not loaded yet
  
  // Find the project using params.id from the fetched projects.data array
  const project = projects.data[params];
  
  // Check if the project was found and log for debugging
  console.log("Found Project: ", project); // Log the found project

  if (!project) return <p>Project not found.</p>; // Handle case if project is not found

  return (
    <div className="bg-black w-full space-y-6  min-h-screen">
      <Header activeSection="aboutus" links={links} />
    

      <div className="container mx-auto p-4 sm:p-0 ">
      <div className="flex flex-col  sm:flex-row space-x-7 space-y-2">
      <div className="flex flex-col sm:w-[50%] items-center justify-center w-full bg-white sm:p-6"> {/* Added padding for spacing */}
      <h1 className="text-4xl font-bold text-center">{project.title}</h1> {/* Centered text */}
      <p className="mt-4 text-center">{project.description}</p> {/* Centered text */}
    </div>
        <div className=" sm:w-[50%] ">
          <img src={project.image} alt={project.title} className="w-full  h-96 object-cover" />
        
      </div>
      <div>
   
</div>
      </div>
   
      </div>
     
      <FooterAll metas={metas} />
    </div>
  );
}
