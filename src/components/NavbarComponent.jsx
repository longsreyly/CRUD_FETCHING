"use client";
import { usePathname } from 'next/navigation'; // Import usePathname hook
import Link from "next/link";

const NavbarComponent = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOr0L5Iu3vA3XW-NHNKAQWkItdF4UhK5-REg&s" className="h-8 mr-3 rounded-2xl " alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fake-Store</span>
        </Link>
        <div className="flex md:order-2">
          <a className="ml-5 block  px-3  text-center bg-pink-400 border rounded-2 text-white  hover:bg-pink-500 hover:text-gray-100 dark:text-gray-200 dark:bg-pink-500 px-4 py-3  text-xs text-center text-white font-semibold bg-pink-400 hover:bg-pink-500  rounded-xl"
            href="/customer">
            Add Customer
          </a>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/"className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${pathname === '/' ? 'underline' : ''}`}>Home</Link>
            </li>
            <li>
              <Link href="/about"className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${pathname === '/about' ? 'underline' : ''}`}> About</Link>
            </li>
            <li>
              <Link href="/contact" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${pathname === '/contact' ? 'underline' : ''}`} >FeedBack</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
