import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
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
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <HashLink smooth to="/#story">
                  Our Story <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#whenwhere">
                  When &amp; Where <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#weddingparty">
                  Wedding Party <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#photos">
                  Photos <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#registry">
                  Registry <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#faq">
                  FAQ <span className="sr-only">(current)</span>
                </HashLink>
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
