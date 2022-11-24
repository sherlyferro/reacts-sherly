import { Link } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header>
      
      <div className="fixed-top">
        <div className="container-fluid bg--transparent">
          <div className="d-flex justify-content-center pt-3">
            <div className="logo"></div>
          </div>
          <nav className="navbar navbar-expand-sm navbar-light">
            <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample11"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse text-center"
                id="navbarsExample11"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                      <a className="menu--link">INICIO</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/relojes">
                      <a className="menu--link">RELOJES</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/joyas">
                      <a className="menu--link">JOYAS</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/accesorios">
                      <a className="menu--link">ACCESORIOS</a>
                    </Link>
                  </li>
                  <li>
                  <CartWidget/>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
