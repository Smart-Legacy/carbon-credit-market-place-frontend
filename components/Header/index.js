"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src="/image.png" alt="Your Logo" />
            </div>
            <div className="hidden md:block">
              <nav className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/carbon-credits"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Carbon Credits
                </Link>
                <Link
                  href="/emissions-factors-data"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Emissions Factors Data
                </Link>
                <Link
                  href="/trust"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Trust
                </Link>
                <Link
                  href="/about"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact-us"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="/news"
                  className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  News
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link
                href="/signup"
                className="bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="border border-green-800 text-green-800 px-3 py-2 rounded-md text-sm font-medium hover:border-green-600 hover:text-green-600"
              >
                Log In
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-green-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-green-600"
              >
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/carbon-credits"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Carbon Credits
          </Link>
          <Link
            href="/emissions-factors-data"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Emissions Factors Data
          </Link>
          <Link
            href="/trust"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Trust
          </Link>
          <Link
            href="/about"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </Link>
          <Link
            href="/news"
            className="text-green-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            News
          </Link>
          <Link
            href="/signup"
            className="bg-green-800 text-white block w-full text-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="border border-green-800 text-green-800 block w-full text-center px-3 py-2 rounded-md text-base font-medium hover:border-green-600 hover:text-green-600"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
