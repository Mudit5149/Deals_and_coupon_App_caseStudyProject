import React from "react";

const Navbar = () => {
  return (
    <div className="Red">
    
       
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">Deals and Coupon app</a>
          
        </div>
      </nav>
      <div className="image">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" Link=""></a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/Login2">
                    Login
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " href="/Register">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/Coupon">
                    Coupon
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/News">
                    News
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/About">
                    About
                  </a>
                </li>
              </ul>
              <div className="buttons">
                
                <a href="/Login2" className="btn  btn  ms-2">
                  
                  <i className="fa fa-sign-out me-1 "></i>Logout


                  

                  
                </a>
                
                
                
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
