import React from 'react';

const Navbar = () => {
  return (
    <div className="body navbar  fixed top-0 z-50 bg-white">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          MovieGPT
        </a>
      </div>

      <div className="navbar-end">
        <a
          href="/generate-movie"
          className="h1 relative inline-block text-lg group "
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black  transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#a66eff]"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">Go to App</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
