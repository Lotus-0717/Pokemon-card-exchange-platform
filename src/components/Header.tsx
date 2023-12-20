import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const toggleAccount = () => {
    setIsAccountVisible(!isAccountVisible);
  };
  return (
    <header className="fixed bg-lightBlue w-full h-14 flex justify-between items-center pr-8 pl-8">
      <Link to="./"><img src="https://fakeimg.pl/100x40/" alt="" /></Link>
      <div className="ctrl-bar flex items-center gap-4">
        <nav className="flex gap-4">
          <NavLink to="/">Index</NavLink>
          <NavLink to="/Store">Store</NavLink>
        </nav>
        <div className="search-wrap relative">
          <input
            className="focus-visible:outline-none w-44 h-8 rounded-full pr-8 pl-4 box-border"
            type="text"
            placeholder="搜尋"
          />
          <div className="y-centered right-1 w-6 h-6 rounded-full bg-gray-400 cursor-pointer">
            <FontAwesomeIcon className="centered text-sm text-white" icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="account-btn w-8 h-8 rounded-full bg-gray-400 relative cursor-pointer" onClick={toggleAccount}>
            <FontAwesomeIcon className="centered text-lg text-white" icon={faUser} />
        </div>
        {isAccountVisible && (
          <div className="account-container box-shadow absolute top-16 right-0 mr-8 border-box pt-1 pb-1">
            <ul>
              <li className='pt-1 pb-1 pl-3 pr-3 hover:bg-gray-100 cursor-pointer'>test1</li>
              <li className='pt-1 pb-1 pl-3 pr-3 hover:bg-gray-100 cursor-pointer'>test2</li>
              <li className='pt-1 pb-1 pl-3 pr-3 hover:bg-gray-100 cursor-pointer'>test3</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
