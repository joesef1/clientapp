import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
  
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Clinic</span>
    </a>
    
    <div class="  md:block md:w-auto" id="navbar-default">
    <ul className="font-medium flex  px-4 md:p-0 mt-4  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0    dark:border-gray-700">
      <li>
        <Link to="/" onClick={() => handleLinkClick('home')}>
          <a
          
            className={`block py-2 pl-3 pr-4 ${
              activeLink === 'home'
                ? 'text-[#3B71CA] '
                : 'text-white '
            }`}
            aria-current={activeLink === 'home' ? 'page' : ''}
          >
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link to="/ReadPage" onClick={() => handleLinkClick('table')}>
          <a className={`block py-2 pl-3 pr-4 ${ activeLink === 'table' ? 'text-[#3B71CA] ' : 'text-white '}`}>
            Table
          </a>
        </Link>
      </li>
    </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
