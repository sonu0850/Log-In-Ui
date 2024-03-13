import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/mylogo.png'


const Navbar = () => {
  const location= useLocation();
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  console.log("nav tok", token);
  
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <>
     
      <nav className="navbar navbar-expand-lg ">
   <Link to="/" onClick={logout}> <img src={Logo} alt="" width={50} /> </Link>
 
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse d-flex justify-content space-between " id="navbarSupportedContent" >
   
     {
      token ? <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
                <NavLink to="/"> Home</NavLink>
              </li>
  
              <li className="nav-item">
                <NavLink to="/Contact">Contact.Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <button onClick={()=>logout()}>Logout</button>
              </li>
            </ul> : null}
             {/* {location.pathname("/")&&} */}
  </div>
  
</nav>

    </>
  );
};

export default Navbar;
