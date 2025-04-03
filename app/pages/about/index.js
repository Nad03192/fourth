"use client";
import { useState, useEffect } from "react";
import Header from "../components/head";
import Banner from "../components/banner";
import ImageGrid from "../components/imageswtext";
import FooterAll from "../components/footerall";
import axios from "../utils/axios";
import  CardsSwipperComponent from "../components/swipper";


export default function AboutusPage() {

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

  return (
    <div className="bg-black flex flex-col w-full space-y-6 min-h-screen  ">
       
     
      <Header activeSection="aboutus" links={links} />
    
      <CardsSwipperComponent slides={projects}/>
      <div className="flex-1"></div>
      <FooterAll metas={metas} />
    </div>
  );
}
