import React, { useState } from 'react';
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface AccountItemProps {
  children: React.ReactNode;
}

function CtrlBar() {
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const toggleAccount = () => {
    setIsAccountVisible(!isAccountVisible);
  };

  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  return (
    <div className="flex ctrl-bar items-center gap-4">
      <nav className={`${isMobileMenu ? '-active' : ''} hidden absolute top-14 left-0 w-full flex-wrap md:flex-nowrap md:relative md:top-0 md:flex md:gap-4`}>
        <div className='fixed top-14 left-0 inset-0 bg-black/50 -z-10 md:hidden' onClick={toggleMobileMenu}></div>
        <div className='order-2 w-full md:flex md:gap-4 md:items-center'>
          <NavLink event={toggleMobileMenu} to="/">Index</NavLink>
          <NavLink event={toggleMobileMenu} to="/Store">Store</NavLink>
        </div>
        <div className="search-wrap relative order-1 w-full bg-white p-4 md:bg-transparent md:p-0">
          <input
            className="focus-visible:outline-none w-full h-8 rounded-full pr-8 pl-4 border-2 box-border md:w-44 md:border-0"
            type="text"
            placeholder="搜尋"
          />
          <div className="y-centered right-5 w-6 h-6 rounded-full bg-gray-400 cursor-pointer md:right-1">
            <FontAwesomeIcon className="centered text-sm text-white " icon={faMagnifyingGlass} />
          </div>
        </div>
      </nav>
      <div className={`account-btn w-8 h-8 rounded-full bg-gray-400 relative cursor-pointer shrink-0`} onClick={toggleAccount}>
        <FontAwesomeIcon className="centered text-lg text-white" icon={faUser} />
      </div>
      <div className={`${isMobileMenu ? '-active' : ''} mobile-toggle-btn md:hidden relative w-8 h-6 cursor-pointer`} onClick={toggleMobileMenu}>
        <span className='block absolute top-0 bg-white w-full h-1 rounded-full'></span>
        <span className='block absolute top-0 bg-white w-full h-1 rounded-full'></span>
        <span className='block absolute top-0 bg-white w-full h-1 rounded-full'></span>
      </div>
      {isAccountVisible && (
        <div className="account-container box-shadow absolute top-16 right-8 border-box pt-1 pb-1 w-40 rounded-md bg-white">
          <ul>
            <AccountItem>
              <p>test1</p>
            </AccountItem>
            <AccountItem>
              <p>test2</p>
            </AccountItem>
            <AccountItem>
              <p>test3</p>
            </AccountItem>
          </ul>
        </div>
      )}
    </div>
  )
}

function AccountItem({ children }: AccountItemProps) {
  return (
    <li className='pt-2 pb-2 pl-3 pr-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between'>
      {children}
      <FontAwesomeIcon icon={faAngleRight} />
    </li>
  );
}

export default CtrlBar;