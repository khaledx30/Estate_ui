import React, { useState } from "react";

const NavTest = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar">
      <NavLink
        onClick={() => handleLinkClick("link1")}
        active={activeLink === "link1"}
      >
        Link 1
      </NavLink>
      <NavLink
        onClick={() => handleLinkClick("link2")}
        active={activeLink === "link2"}
      >
        Link 2
      </NavLink>
      <NavLink
        onClick={() => handleLinkClick("link3")}
        active={activeLink === "link3"}
      >
        Link 3
      </NavLink>
    </div>
  );
};

const NavLink = ({ onClick, active, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="#" onClick={handleClick} className={active ? "active" : ""}>
      {children}
    </a>
  );
};

export default NavTest;
