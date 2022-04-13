import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="Assets/tatacliq.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="Assets/flipkarthome.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src="Assets/Myntrahomepage.png" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>


            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="Assets/Rupees.png" class="card-img-top"height={150} alt="..."/>
      <div class="card-body">
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Assets/flipkart1.png" class="card-img-top" height={140} alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Assets/Amazon.png" class="card-img-top"height={140} alt="..."/>
      <div class="card-body">
        
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Assets/Woocommerce.png" class="card-img-top"height={140} alt="..."/>
      <div class="card-body">
      </div>
    </div>
  </div>
</div>
           
            
          </div>
          <div class="card bg-dark text-white">
            {/* <img src="" class="card-img" alt="..."/> */}
            <div class="card-img-overlay">
              <h2>welcome to the Deals And Coupon app</h2>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="submit" id="sub_butt">
                  <Link className="link" to="/Register">
                    Go To Register page
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
