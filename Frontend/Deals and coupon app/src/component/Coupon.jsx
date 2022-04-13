import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Coupon = () => {
  const [data, setData] = useState([]);
  const getCoupon = () => {
    try {
      axios.get("http://localhost:9009/coupons/view").then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoupon();
  }, []);

  return (
    <>


      
      <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center ">
              {" "}
              Best Offer Coupons
            </h1>
            <img
              src="Assets/Coupons3.png"
              className="card-img"
              alt="Background"
              height="300px"
            />
            <img
              src="Assets/Discount.png"
              className="card-img"
              alt="Background"
              height="300px"
            />
            <hr />
            <div class="row row-cols-1 row-cols-md-2 g-4"></div>
          </div>
          {data.map((detail, index) => (
            <div key={detail.id}>
              <p style={{ color: "white" }}>
                <h5 style={{ padding: "2%" }}>
                  Id: {index + 1}
                  <br />
                  <hr />
                  <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item">COUPON ID : {detail.Id} </li> */}
                    <li class="list-group-item">COUPON NAME : {detail.couponName} </li>
                    
                    <li class="list-group-item">COUPON CODE : {detail.couponCode}</li>
                    <li class="list-group-item">COUPON TITLE : {detail.couponTitle}</li>
                    <li class="list-group-item">COUPON TYPE : {detail.couponType}</li>
                    <button class=" btn btn-dark btn-lg me-md-2" type="button">COPY THIS CODE : {detail.couponCode} </button>
                    <div class=" d-grid gap-2 d-md-flex justify-content-md-center">
                      <a href='http://localhost:8081/paymentDetails'>
                        <button class="btn btn-info btn-lg me-md-2">PAY NOW</button>
                      </a>
                     
                    </div>
                  </ul>
                </h5>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
    </>
    
  );
};

export default Coupon;
