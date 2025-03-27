"use client";
import { useState, useEffect } from "react";
import Header from "../components/head";
import Banner from "../components/banner";
import ImageGrid from "../components/imageswtext";
import FooterAll from "../components/footerall";
import axios from "../utils/axios";

// The `getStaticProps` function fetches data at build time and passes it as props.
export async function getStaticProps({ locale }) {
  let data = null;

  try {
    const response = await axios.get("/page/news", {
      headers: {
        "Accept-Language": locale,
      },
    });
    data = response.data;  // Store the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);  // Log any errors
  }

  return {
    props: {
      data,  // Return the fetched data as props
    },
  };
}

export default function HomePage() {
  const [data, setData] = useState(null);  // State for holding fetched data

  // Fetch the data when the component mounts
  useEffect(() => {
    axios.get("/page/news")
      .then((response) => {
        setData(response.data);  // Set the data to state when it's fetched
      })
      .catch(console.error);  // Handle any error in fetching
  }, []);  // Empty dependency array ensures it only runs once when the component mounts

  const items = [
    { image: "/images/im1.jpg", text: "Fizz The World", subtext: "Pepsi's Expo 2022 campaign" },
    { image: "/images/im2.jpg", text: "A Display To Inspire The Everyday Chef", subtext: "We created our bespoke, modular displays that can be arranged in countless configurations." },
    { image: "/images/im3.jpg", text: "The Optimum Nutrition For The Optimum Challenge", subtext: "Designed for elite athletes, this campaign highlighted high-performance nutrition to fuel endurance and strength training." },
    { image: "/images/im4.jpg", text: "Biodegradable Product in an Eco-friendly Space", subtext: "For Nivea's new range of biodegradable wipes, we found the perfect balance between sustainability and innovation, creating a display that reinforces their commitment to a greener future." },
  ];

  return (
    <div className="bg-black w-full min-h-screen">
      <Header activeSection="" />
      <Banner />
      {/* Pass data from state to ImageGrid */}
      <ImageGrid items={items} data={data} />
      <FooterAll />
    </div>
  );
}
