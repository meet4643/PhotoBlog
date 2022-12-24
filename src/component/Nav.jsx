import React from 'react'
import { NavLink } from 'react-router-dom';
import './App.css';


const Nav = () => {
  return (
    <div>
      

      <nav >
  <div>
   
    <div >
      <ul className=" flexa">
<li>
        <i className='fa-brands fa-facebook'></i>
    </li>
        <li >
                    <NavLink className={"navlink"} exact activeClassName="active_class" to="/"> Home </NavLink>
        </li>
        <li >
            <NavLink  className={"navlink"} activeClassName="active_class" to="/Gallery"> Gallery</NavLink>
        </li>
        <li >
              <NavLink className={"navlink"} activeClassName="active_class" to="/Home"> Hello Meet </NavLink>  
        </li>
        <li >
              <NavLink className={"navlink"} activeClassName="active_class" to="/About"> About </NavLink>
        </li>
        <li >
             <NavLink className={"navlink"} activeClassName="active_class" to="/Content"> Contect </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav;