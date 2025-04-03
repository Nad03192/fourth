"use client";
import { useState, useEffect } from "react";
import Header from "../components/head";
import FooterAll from "../components/footerall";
import axios from "../utils/axios";

export default function ProjectDetail({ params }) {
  const [links, setLinks] = useState(null);  // State for holding fetched data
  const [projects, setProjects] = useState(null);  // State for holding fetched data
  const [metas, setMetas] = useState(null);  // State for holding fetched data

  // Fetch the data when the component mounts
  useEffect(() => {
    axios.get("/settings")
      .then((response) => {
        setLinks(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);
  }, []);

  // Fetch projects data
  useEffect(() => {
    axios.get("/projects")
      .then((response) => {
        setProjects(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);
  }, []);

  // Fetch metas data
  useEffect(() => {
    axios.get("/page/home")
      .then((response) => {
        setMetas(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);
  }, []);

  // Debugging output to check params and projects data
  useEffect(() => {
    console.log("Params ID: ", params.id); // Log params.id
    console.log("Projects Data: ", projects?.data); // Log the projects.data array
  }, [params, projects]);

  // Handle the case where the projects data is not available yet
  if (!projects) return <p>Loading...</p>;

  // Find the project that matches the params.id
  const project = projects.data.find((p) => p.id === parseInt(params.id));  // Ensure the ID is compared correctly

  // Check if the project was found and log for debugging
  console.log("Found Project: ", project); // Log the found project

  // Handle the case where the project was not found
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
