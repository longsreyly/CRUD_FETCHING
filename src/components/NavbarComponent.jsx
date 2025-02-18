"use client";
import { usePathname } from "next/navigation"; // Import usePathname hook
import { useState } from "react";
import Link from "next/link";

const NavbarComponent = () => {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const navLink = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "FeedBack" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  const handleLanguageChange = (language) => {
    console.log("Language selected:", language);
    // Implement the action to change the language here
  };

  return (
    <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOr0L5Iu3vA3XW-NHNKAQWkItdF4UhK5-REg&s"
            className="h-8 mr-3 rounded-2xl"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fake-Store
          </span>
        </Link>

        <div className="flex md:order-2">
          <Link
            className="ml-5 block px-4 py-3 bg-pink-400 text-white text-xs font-semibold rounded-xl hover:bg-pink-500 dark:text-gray-200 dark:bg-pink-500 hover:text-gray-100"
            href="/customer"
          >
            Add Customer
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* change language */}
          <div title="Change Language" className="dropdown dropdown-end ml-5">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost"
              aria-label="Language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11 5a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L12.89 12H9.109l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 11 5Zm-1.24 5.5h2.48L11 7.636 9.76 10.5ZM5 1a.75.75 0 0 1 .75.75v1.261a25.27 25.27 0 0 1 2.598.211.75.75 0 1 1-.2 1.487c-.22-.03-.44-.056-.662-.08A12.939 12.939 0 0 1 5.92 8.058c.237.304.488.595.752.873a.75.75 0 0 1-1.086 1.035A13.075 13.075 0 0 1 5 9.307a13.068 13.068 0 0 1-2.841 2.546.75.75 0 0 1-.827-1.252A11.566 11.566 0 0 0 4.08 8.057a12.991 12.991 0 0 1-.554-.938.75.75 0 1 1 1.323-.707c.049.09.099.181.15.271.388-.68.708-1.405.952-2.164a23.941 23.941 0 0 0-4.1.19.75.75 0 0 1-.2-1.487c.853-.114 1.72-.185 2.598-.211V1.75A.75.75 0 0 1 5 1Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                width="12px"
                height="12px"
                className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>{" "}
            <div
              tabIndex="0"
              className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
            >
              <ul className="menu menu-sm gap-1">
                <li>
                  <button
                    className="w-full text-left hover:bg-gray-200 hover:text-white transition-colors duration-200"
                    onClick={() => handleLanguageChange("EN")}
                  >
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-100">
                      EN
                    </span>
                    <span className="font-[sans-serif]">english</span>
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left hover:bg-gray-200 hover:text-white transition-colors duration-200"
                    onClick={() => handleLanguageChange("KH")}
                  >
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-100">
                      KH
                    </span>
                    <span className="font-[sans-serif]">khmer</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLink.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 pl-3 pr-4 rounded ${
                    pathname === href ? "underline" : ""
                  } hover:bg-gray-100 md:hover:text-pink-700 dark:text-white dark:hover:bg-gray-700`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
