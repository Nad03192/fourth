"use client";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Banner from "../components/bannerimage";
import Header from "../components/head";
import FooterAll from "../components/footerall";
export default function OurWorkPage() {
      const [data, setData] = useState(null);
      const [links, setLinks] = useState(null);
      const [projects, setProjects] = useState(null);
      const [metas, setMetas] = useState(null);
      const [loading, setLoading] = useState(true); // Added loading state
    
      useEffect(() => {
        axios.get("/page/news").then((response) => setData(response.data)).catch(console.error);
        axios.get("/settings").then((response) => setLinks(response.data)).catch(console.error);
        axios.get("/projects").then((response) => {
          setProjects(response.data);
          setLoading(false); // Stop loading when data is fetched
        }).catch((error) => {
          console.error(error);
          setLoading(false);
        });
        axios.get("/page/home").then((response) => setMetas(response.data)).catch(console.error);
      }, []);
    
  return (
    <div className="bg-black w-full min-h-screen">
          <Header activeSection="ourwork" links={links} />
      <Banner
        image="/images/ban.jpg"
        heading="Welcome to Our Work"
        text="Discover our amazing services and offerings."
        ctaText="Learn More"
        poph1="Our Work"
        poptext="Here is some detailed information about our work and services."
      />
        <div className="flex-1"></div>

<FooterAll metas={metas} />
</div>
    
  );
}
