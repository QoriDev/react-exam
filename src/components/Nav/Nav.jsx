import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {


  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await fetch('https://api.github.com/users/QoriDev');
    const result = await res.json();

    setdata(result);
  };

  return (
    <>
      <div className="wrapper">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/repostories" className="nav-link">
                {`Repostories ${data.public_repos}`}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link">
                Packages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link">
                Stars
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
