"use client";
import Link from "next/link";
import Image from "next/image";

export default function FooterAll() {
  return (

    <div className=" bg-red-400 h-auto w-full">
      <footer className="container w-full mx-auto bg-red-400 dark:bg-gray-900 sm:pt-20 pt-5">
        <div className="pb-3 container mx-auto">
                    {/* Grid Container */}
          <div className="grid grid-cols-2 p-4 sm:pb-10 sm:p-0 sm:grid-cols-7 gap-0 gap-y-3  sm:gap-y-10 items-start ">

            {/* Pages Section */}
            <div className="flex flex-col items-start text-white">
              <p className="text-[13px] mb-5">sitemap</p>
              <ul className="space-y-1">
                {[
                  { href: "/aboutus", label: "about us" },
                  { href: "/ourwork", label: "our work" },
                  { href: "/ourclients", label: "our clients" },
                  { href: "/ourteam", label: "our team" },
                  
                  { href: "/contactus", label: "contact us" }
                ].map((item, index) => (
                  <li key={index} className="relative flex items-center">
                
                    <a href={item.href} className="hover:text-gray-300 text-xs font-semibold ">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Pages Section */}
            <div className="flex flex-col items-start text-white">
              <p className="text-[13px] mb-5">Offices</p>
              <ul className="space-y-1 font-semibold text-xs">
             <li>dubai,UAE</li>
             <li>beirut,LEBANON</li>
             <li>paris,FRANCE</li>
            <li>cairo,EGYPT</li>
            <li>riyadh,KSA</li>
              </ul>
            </div>
            <div className="sm:col-span-4">

            </div>
            <div className="flex flex-col col-span-6 sm:col-span-1 items-start   text-white">
              <p className="text-[13px] mb-5">inquieries</p>
            <p className="text-xs font-semibold">briefme@mindspace-me.com</p>
            </div>
         
            <div className="flex space-x-5 text-white text-4xl font-bold items-start w-full">
  <h1 className="flex-grow text-justify">mindspace</h1>
</div>


  <div className="items-center space-x-5 flex flex-row ">

  <div className="border-l-0 sm:border-l-2 ml-3 border-white h-10 "></div>
  <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" className="hover:opacity-80 transition fill-white text-white">
    <path 
      d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
      className="stroke-white stroke-2"  // Adding stroke to make it thicker
    />
  </svg>
</a>

 <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  
  <svg className="w-6 h-7 hover:opacity-80 transition text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5C0 2.12 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h4v1.74c.56-.96 2-2.24 4.14-2.24 3.55 0 5.36 2.23 5.36 6.16V20h-4v-6.5c0-1.64-.03-3.76-2.3-3.76-2.3 0-2.65 1.8-2.65 3.64V20h-4V8z"/>
  </svg>
</a>

  </div>
  <div className="col-span-4">

            </div>
               
                <div className="flex flex-row items-start sm:space-x-2 space-x-4 col-span-4 sm:col-span-1 text-[13px] text-white">
              <p >privacy policy</p>
              <div className="sm:border-l-1 border-l-0 border-white h-5 "></div>
              <p >terms & condition</p>
            </div>

         </div>
         </div>

      </footer>
    </div>
  );
}
