import React from 'react';
import { Link } from 'react-router-dom';


interface NavLinkProps {
  event: () => void;
  to: string;
  children: React.ReactNode;
}

function NavLink({event, to, children }: NavLinkProps) {
  return (
    <Link onClick={event} to={to} className="nav-item block bg-white p-4 border-b md:border-b-0 md:p-0 md:bg-transparent md:after:absolute md:after:content-[''] md:after:block md:after:w-full md:after:h-1 md:after:-bottom-4 md:after:opacity-0 md:hover:after:opacity-1 md:after:left-0 md:after:bg-lightYellow md:transition md:text-white md:hover:text-gray-900 md:relative">
      {children}
    </Link>
  )
}

export default NavLink;
