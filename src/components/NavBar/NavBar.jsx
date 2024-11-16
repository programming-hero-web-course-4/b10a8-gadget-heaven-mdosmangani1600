import { NavLink } from "react-router-dom";



const NavBar = () => {

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
  
    return (
            <div class="navbar p-5 ">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div class="navbar-end">
  <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
  <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
        <div><i class="fa-regular w-7 fa-heart"></i></div>
        </div>
      </div>
  </div>
            </div>
    );
};

export default NavBar;