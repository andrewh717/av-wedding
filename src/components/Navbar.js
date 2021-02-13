import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          to={(location) => {
            return route(location.pathname, '/');
          }}
        >
          A&V
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <HashLink smooth to="/#story">
              Our Story <span className="sr-only">(current)</span>
              </HashLink>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#travel">
                Travel <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#weddingparty">
                Wedding Party <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#photos">
                Photos <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              {/* <a className="nav-link" href="#registry">
                Registry <span className="sr-only">(current)</span>
              </a> */}
              <HashLink smooth to="/#registry">
                Registry <span className="sr-only">(current)</span>
              </HashLink>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#faq">
                FAQ <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

function route(currPath, destPath) {
  console.log('currPath', currPath);
  console.log('destPath', destPath);
  let route = destPath;
  if (currPath === '/' && destPath === '/') {
    window.scrollTo(0, 0);
  } else if (currPath !== '/') {
    route = `/${destPath}`;
  }
  console.log('Routing to: ', route);
  return route;
}
