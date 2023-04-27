<<<<<<< HEAD
import { useState } from "react";
import Image from "next/image";
import logo from "public/puplogo.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);

  return (
    <nav className="bg-red-800 flex space-x-1 p-pad">
      <div className="pad-p">
        <Image
          src={logo}
          className="pl-3 pr-4 p-pad"
          height={120}
          width={110}
          alt=""
        />
      </div>
      <div className="p-pad">
        <div className="flex flex-wrap justify-between h-16 p-pad">
          <div className="flex-shrink-0">
            <h1 className="text-red font-bold text-lg hidden md:block">
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
            </h1>
            <div className="flex-shrink-0">
              <h2 className="text-gray font-bold text-lg hidden md:block">
                THE COUNTRY&aposS 1ST POLYTECHNICU UNIVERSITY
              </h2>
              <div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center space-x-4  ">
                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium "
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                      >
                        ABOUT PUP
                      </a>
                      {isAboutOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red hover:text-red"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:red hover:text-red">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-red hover:text-red">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium"
                        onMouseEnter={() => setIsAcademicOpen(true)}
                        onMouseLeave={() => setIsAcademicOpen(false)}
                      >
                        ACADEMIC
                      </a>
                      {isAcademicOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium"
                        onMouseEnter={() => setIsStudentsOpen(true)}
                        onMouseLeave={() => setIsStudentsOpen(false)}
                      >
                        STUDENTS
                      </a>
                      {isStudentsOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium"
                        onMouseEnter={() => setIsResearchOpen(true)}
                        onMouseLeave={() => setIsResearchOpen(false)}
                      >
                        RESEARCH
                      </a>
                      {isResearchOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-16 w-16  text-red "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
=======
import { useState } from "react";
import Image from "next/image";
import logo from "public/puplogo.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);

  return (
    <nav className="bg-red-800 flex space-x-1 p-pad">
      <div className="pad-p">
        <Image
          src={logo}
          className="pl-3 pr-4 p-pad"
          height={120}
          width={110}
        />
      </div>
      <div className="p-pad">
        <div className="flex flex-wrap justify-between h-16 p-pad">
          <div className="flex-shrink-0">
            <h1 className="text-red font-bold text-lg hidden md:block">
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
            </h1>
            <div className="flex-shrink-0">
              <h2 className="text-gray font-bold text-lg hidden md:block">
                THE COUNTRYS 1ST POLYTECHNICU UNIVERSITY
              </h2>
              <div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center space-x-4  ">
                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium "
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                      >
                        ABOUT PUP
                      </a>
                      {isAboutOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red hover:text-red"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:red hover:text-red">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-red hover:text-red">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium"
                        onMouseEnter={() => setIsAcademicOpen(true)}
                        onMouseLeave={() => setIsAcademicOpen(false)}
                      >
                        ACADEMIC
                      </a>
                      {isAcademicOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium"
                        onMouseEnter={() => setIsStudentsOpen(true)}
                        onMouseLeave={() => setIsStudentsOpen(false)}
                      >
                        STUDENTS
                      </a>
                      {isStudentsOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        className="text-red  px-3 py-2 rounded-md text-sm font-medium"
                        onMouseEnter={() => setIsResearchOpen(true)}
                        onMouseLeave={() => setIsResearchOpen(false)}
                      >
                        RESEARCH
                      </a>
                      {isResearchOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            href="#"
                          >
                            History
                          </a>
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Vision, Mission, and Goals
                          </a>

                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            PUP Hymn
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-16 w-16  text-red "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
>>>>>>> 233577309140774ce5c32d3b2c14fa7b6d76badb
