"use client";
import { useState, useEffect } from "react";
import Header from "../../components/head";
import FooterAll from "../../components/footerall";
import axios from "../../utils/axios";
import CardsSwipperComponent from "../../components/swipper";

export default function AboutusPage() {
  const [links, setLinks] = useState(null);
  const [projects, setProjects] = useState(null);
  const [metas, setMetas] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 Added loading state

  useEffect(() => {
    axios.get("/settings")
      .then((response) => setLinks(response.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios.get("/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false); // 🔹 Stop loading when data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Ensure loading state stops even if there's an error
      });
  }, []);

  useEffect(() => {
    axios.get("/page/home")
      .then((response) => setMetas(response.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-black flex flex-col w-full space-y-6 min-h-screen">
      <Header activeSection="aboutus" links={links} />

      {loading ? (
        <div className="flex justify-center items-center h-screen text-white">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <CardsSwipperComponent slides={projects} />
      )}

      <div className="flex-1"></div>
      <FooterAll metas={metas} />
    </div>
  );
}
