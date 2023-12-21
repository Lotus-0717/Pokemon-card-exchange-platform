import React, { useState } from 'react';
import NavLink from "../NavLink";
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
  return (
    <div className="flex ctrl-bar items-center gap-4">
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
          <FontAwesomeIcon className="centered text-sm text-white " icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="account-btn w-8 h-8 rounded-full bg-gray-400 relative cursor-pointer" onClick={toggleAccount}>
          <FontAwesomeIcon className="centered text-lg text-white" icon={faUser} />
      </div>
      <div className="mobile-toggle-btn md:hidden relative w-8 h-6 cursor-pointer">
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
