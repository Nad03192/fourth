"use client";
import { useState, useEffect } from "react";
import Header from "../components/head";
import FooterAll from "../components/footerall";
import axios from "../utils/axios";

export default function ProjectDetail({ params }) {
  const [links, setLinks] = useState(null); 
  const [projects, setProjects] = useState(null);  
  const [metas, setMetas] = useState(null); 

  
  useEffect(() => {
    axios.get("/settings")
      .then((response) => {
        setLinks(response.data);  
      })
      .catch(console.error);
  }, []);


  useEffect(() => {
    axios.get("/projects")
      .then((response) => {
        setProjects(response.data);  
      })
      .catch(console.error);
  }, []);

 
  useEffect(() => {
    axios.get("/page/home")
      .then((response) => {
        setMetas(response.data);  
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log("Params ID: ", params); 
    console.log("Projects Data: ", projects?.data); 
  }, [params, projects]);

  
  if (!projects) return <p>Loading...</p>;

 
  const project = projects.data.find((p) => p.id === parseInt(params));  

 
  console.log("Found Project: ", project);


  if (!project) return <p>Project not found.</p>;

  return (
    <div className="bg-black w-full space-y-6 flex flex-col min-h-screen">
      <Header activeSection="aboutus" links={links} />

      <div className="container mx-auto p-4 sm:p-0">
        <div className="flex flex-col sm:flex-row space-x-7 space-y-2">
          <div className="flex flex-col sm:w-[50%] items-center justify-center w-full bg-white sm:p-6">
            <h1 className="text-4xl font-bold text-center">{project.title}</h1>
            <p className="mt-4 text-center">{project.description}</p>
          </div>
          <div className="sm:w-[50%]">
            <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      <FooterAll metas={metas} />
    </div>
  );
}
