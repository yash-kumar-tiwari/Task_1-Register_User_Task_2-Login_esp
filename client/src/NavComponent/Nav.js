import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div id='nav'>
    {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" class="navbar-brand ms-lg-5">
            <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>User Details</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a class="nav-item nav-link"><Link to="/">Home</Link></a>
                <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
                <a class="nav-item nav-link"><Link to="/manageusers">Users</Link></a>

            </div>
        </div>
    </nav>
    {/* Navbar End */}
    </div>

  );
}

export default Nav;