//import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#F7C04A"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Copito Candy</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Registrate">Regístrate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ubicanos">Ubícanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
