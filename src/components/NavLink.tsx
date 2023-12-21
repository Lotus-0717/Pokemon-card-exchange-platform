import React from 'react';
import { Link } from 'react-router-dom';

// 定义属性类型
interface NavLinkProps {
  to: string;
  children: React.ReactNode; // 或 string，如果您只希望传递文本
}

function NavLink({ to, children }: NavLinkProps) {
  return(
    <Link
      to={to}
      className="nav-item after:absolute after:content-[''] after:block after:w-full after:h-1 after:-bottom-4 after:opacity-0 hover:after:opacity-1 after:left-0 after:bg-lightYellow transition text-white hover:text-gray-900 relative"
    >
      {children}
    </Link>
  )
}

export default NavLink;
