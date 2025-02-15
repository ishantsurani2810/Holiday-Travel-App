import "./navstyle.css"
import { Menuitems } from "../components/menuitems";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className=" col-12 navbar navbar-expand-md NavbarItems navbar-light sticky-top pt-0 pb-2"
      >
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ fontWeight: "900", fontFamily: "cursive", fontSize: "27px" }}>
          Holiday
          </Link>
          <button
            className="navbar-toggler m-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            <ul className="nav-menu mb-0">
              {Menuitems.map((items, index) => {
                return (
                  <div key={index}>
                    <li className="list-my" key={index}>
                      <Link className={items.cName} to={items.url}>
                        <i className={items.icone}></i>
                        {items.title}
                      </Link>
                    </li>
                  </div>
                )
              })}
              <button className="btn2">Sign Up</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
