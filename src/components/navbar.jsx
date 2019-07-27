import React, { Component } from "react";
//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("navbar - rendered"); // cannot use life-cycle hooks in a stateless function component - only in a class component
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
