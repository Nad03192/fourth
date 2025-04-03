"use client";
import { useState, useEffect } from "react";
import Header from "../components/head";
import Banner from "../components/banner";
import ImageGrid from "../components/imageswtext";
import FooterAll from "../components/footerall";
import axios from "../utils/axios";
import CardsSwipperComponent from "../components/swipper";

export default function HomePage() {
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

  const items = [
    { image: "/images/im1.jpg", text: "Fizz The World", subtext: "Pepsi's Expo 2022 campaign" },
    { image: "/images/im2.jpg", text: "A Display To Inspire The Everyday Chef", subtext: "We created our bespoke, modular displays that can be arranged in countless configurations." },
    { image: "/images/im3.jpg", text: "The Optimum Nutrition For The Optimum Challenge", subtext: "Designed for elite athletes, this campaign highlighted high-performance nutrition to fuel endurance and strength training." },
    { image: "/images/im4.jpg", text: "Biodegradable Product in an Eco-friendly Space", subtext: "For Nivea's new range of biodegradable wipes, we found the perfect balance between sustainability and innovation, creating a display that reinforces their commitment to a greener future." },
  ];

  return (
    <div className="bg-black w-full min-h-screen">
      <Header activeSection="" links={links} />
      <Banner />
      {loading ? (
        <div className="flex justify-center items-center h-screen text-white">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <ImageGrid items={items} data={data} />
      )}
     
      <FooterAll metas={metas} />
    </div>
  );
}
