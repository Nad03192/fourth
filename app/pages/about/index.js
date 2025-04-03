"use client";
import { useState, useEffect } from "react";
import Header from "../../components/head";

import FooterAll from "../../components/footerall";
import axios from "../../utils/axios";
import  CardsSwipperComponent from "../../components/swipper";


export default function AboutusPage() {

  const [links, setLinks] = useState(null); 

  
  useEffect(() => {
    axios.get("/settings")
      .then((response) => {
        setLinks(response.data);  
      })
      .catch(console.error);
  }, []); 
  const [projects, setProjects] = useState(null);  
  
  
  useEffect(() => {
    axios.get("/projects")
      .then((response) => {
        setProjects(response.data);  
      })
      .catch(console.error); 
  }, []); 
  
  
  const [metas, setMetas] = useState(null);  


  useEffect(() => {
    axios.get("/page/home")
      .then((response) => {
        setMetas(response.data);  
      })
      .catch(console.error); 
  }, []);  

  return (
    <div className="bg-black flex flex-col w-full space-y-6 min-h-screen  ">
       
     
      <Header activeSection="aboutus" links={links} />
    
      <CardsSwipperComponent slides={projects}/>
      <div className="flex-1"></div>
      <FooterAll metas={metas} />
    </div>
  );
}
