import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">        
        <a className="nav-link text-white" b href="https://github.com/Hail91" target="_"><i class="fas fa-home"></i> Home<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0 text-light bg-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default NavBar;