"use client";
import Header from "../components/head";
import Banner from "../components/banner";
import ImageGrid from "../components/imageswtext"
export default function HomePage() {

    const items = [
        { image: "/images/im1.jpg", text: "Fizz The World", subtext: "Pepsi's Expo 2022 campaingn" },
        { image: "/images/im2.jpg", text: "A Display To Inspire The Evry Day Chef", subtext: "We created our brespoke,modular displays can be arranged in countless configurations" },
        { image: "/images/im3.jpg", text: "The Optimum Nutrition For The Optimum Challenge", subtext: "Designed for elite athletes, this campaign highlighted high-performance nutrition to fuel endurance and strength training." },
        { image: "/images/im4.jpg", text: "Biodegradable Product in an Eco-friendly Space", subtext: "For Nivea's new range of biodegradable wipes, we found the perfect balance between sustainability and innovation, creating a display that reinforces their commitment to a greener future." },
      ];

      
  return (
    <div className="bg-black w-full min-h-screen">
    <div>

 <Header activeSection="" />

<Banner/>
  
<ImageGrid items={items} />
</div>
      </div> 
  )
  ;
}
