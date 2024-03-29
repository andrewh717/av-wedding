import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useMobile from '../hooks/useMobile';

const Navbar = () => { 
  const isMobile = useMobile();
  return (
    <div>
      <nav id="navbar" className={`navbar ${isMobile ? "fixed-bottom" : "fixed-top"} navbar-expand-lg navbar-light bg-light`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={(location) => {
              return route(location.pathname, '/');
            }}
          >
            A&amp;V
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <HashLink smooth to="/#story">
                  Our Story
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#when-and-where">
                  When &amp; Where
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#weddingparty">
                  Wedding Party
                </HashLink>
              </li>
              <li className="nav-item">
                <a href="https://smile.amazon.com/wedding/andrew-hernandez-vanessa-gao--may-2022/registry/4HV3BFAGT7OH" target='_blank' rel="noopener noreferrer">
                  Registry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

function route(currPath, destPath) {
  let route = destPath;
  if (currPath === '/' && destPath === '/') {
    window.scrollTo({top: 0, behavior: 'smooth'});
  } else if (currPath !== '/') {
    route = `${destPath}`;
  }
  return route;
}
