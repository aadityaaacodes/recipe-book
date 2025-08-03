import react from "react";

function Navbar() {
  return (
  <>
        <nav className="navbar">
            <h2 className="logo">MyApp</h2>
            <ul className="nav-links">
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar;