import Link from "next/link";
import Logo from "../components/logo"
import { useState } from "react";
export default function Header({ activeSection ,links }) {
    console.log("l",links);
    const [isOpen, setIsOpen] = useState(false);
  return (
 <div className="sticky bg-black w-full z-50 top-0 h-28 flex">
    <header className="sticky top-0 z-50 sm:h-28 container mx-auto flex items-center justify-between pt-2 sm:pt-0 p-1 sm:p-0 bg-black text-white">
      <a href="/" className="flex items-center  ">
        <Logo/>
      </a>

      {/* Text on the Right */}
      <div className="text-xl font-semibold hidden sm:flex">
        <div className="flex items-center gap-5">
          <Link
            href=""
            className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'aboutus' ? 'font-bold text-white' : ''}`}
          >
            about us
          </Link>
          <Link
            href="/ourwork"
            className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'ourwork' ? 'font-bold text-white' : ''}`}
          >
            our work
          </Link>
          <Link
            href="/ourclients"
            className={`text-gray-400 text-[17px]  font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'services' ? 'font-bold text-white' : ''}`}
          >
            our clients
          </Link>
          <Link
            href="/ourteam"
            className={`text-gray-400 text-[17px]  font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'contact' ? 'font-bold text-white' : ''}`}
          >
            our team
          </Link>
          <Link
            href="/contactus"
            className={`text-gray-400 text-[17px]  font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'contact' ? 'font-bold text-white' : ''}`}
          >
            contact us
          </Link>
        </div>
     
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-8 h-8 text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>
      <div className={`md:hidden fixed top-20 left-0 w-full h-full z-50  bg-black dark:bg-gray-800 transition-all duration-300 flex flex-col items-center pt-6 ${isOpen ? "block" : "hidden"}`}>
  <div className="flex flex-col items-center space-y-6 py-4 px-4 text-center">
    {/* Links */}
    <div className="text-xl font-semibold">
      <div className="flex flex-col items-center gap-5">
        <Link
          href=""
          className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'aboutus' ? 'font-bold text-white' : ''}`}
        >
          about us
        </Link>
        <Link
          href="/ourwork"
          className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'ourwork' ? 'font-bold text-white' : ''}`}
        >
          our work
        </Link>
        <Link
          href="/ourclients"
          className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'ourclients' ? 'font-bold text-white' : ''}`}
        >
          our clients
        </Link>
        <Link
          href="/ourteam"
          className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'ourteam' ? 'font-bold text-white' : ''}`}
        >
          our team
        </Link>
        <Link
          href="/contactus"
          className={`text-gray-400 text-[17px] font-bold hover:text-white hover:border-b-2 hover:border-blue-500 dark:text-white dark:hover:text-blue-400 ${activeSection === 'contact' ? 'font-bold text-white' : ''}`}
        >
          contact us
        </Link>
      </div>
    </div>
  </div>


      </div>
    </header>
    </div>
  );
}
