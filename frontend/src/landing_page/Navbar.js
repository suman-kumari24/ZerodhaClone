import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

    <nav class="navbar navbar-expand-lg border-bottom" 
    style={{backgroundColor:"#FFF"}}>
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src='media/images/logo.svg' 
          alt='logo' 
          style={{width:"25%"}} 
          />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
       <form >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signUp">
                Signup
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/about'>
                about
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/products'>
                products
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/pricing'>
                pricing
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/support'>
                support
                </Link>
            </li>
            
            </ul>
        </form>
        </div>
      </div>
    </nav>

      );
}

export default Navbar;