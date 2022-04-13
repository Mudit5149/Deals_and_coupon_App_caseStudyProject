import React from "react";
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Admin = () => {
    


    const [data, setData] = useState([]);

    const getCoupon = () => {
      

        try {

            axios.get("http://localhost:9009/coupons/view")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                })
        }
        catch (error) {
            console.log(error)
        };

    }
    const deleteCoupon = (id) => {

        try {
            if (
                axios.delete(`http://localhost:9009/coupons/delete/${id}`)
                    .then(response => {
                        console.log(response);
                        getCoupon();

                    })) { alert("Coupon with id " + id + " is removed") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    useEffect(() => {
        getCoupon();



    }, []);
    return (
        <>
        {/* <Navbar1 /> */}
            <div style={{ backgroundColor: "orange" }}>
                <div>
                    <center> <h1>All coupons are as follows</h1></center><hr />
                </div>


                <div>


                    {/* <div style={{ backgroundColor: "#62bef6", width: "90%", marginLeft: "5%" }}/> */}

                    {data.map((detail) =>
                        <div className='cards'>
                            <div className='cards_Info'>
                                <div key={detail.id}>
                                    <h5 className='card_category'>COUPON NAME:- {detail.couponName}</h5>
                                    <h5 className='card_category'>COUPON CODE:-{detail.couponCode}</h5>
                                    <h5 className='card_category'>COUPON TITLE :- {detail.couponTitle}</h5>
                                    <h5 className='card_category'>COUPON TYPE :-{detail.couponType}</h5>
                                   

                                    <center> <button style={{ backgroundColor: "Magenta", color: "black" }} ><Link to="/EditCoupon">Add/Update</Link></button></center>


                                    <center><button onClick={() => deleteCoupon(detail.id)} style={{backgroundColor: "orange", color: "Brown" }}>delete</button></center>






                                </div>
                            </div>
                        </div>


                    )}
                </div>
            </div>
           

        </>
    )
}


export default Admin;