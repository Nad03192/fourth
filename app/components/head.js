import Link from "next/link";

export default function Header({ activeSection }) {
  return (
    <header className="container mx-auto flex items-center justify-between  bg-gray-800 text-white">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <img src="/images/logo.svg" alt="Logo" className="h-20 w-20" />
      </div>

      {/* Text on the Right */}
      <div className="text-xl font-semibold">
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
    </header>
  );
}
