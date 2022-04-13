import React from 'react'
import { useState } from 'react'
import axios from "axios"


const EditCoupon = () => {
    const [input, setInput] = useState({
        "id": "",
        "couponName": "",
        "couponCode": "",
        "couponTitle": "",
        "couponType": "",
        


    });


    const inputEvent = (event) => {

        const { name, value } = event.target;
        setInput((previousvalue) => {
            console.log(previousvalue.data);
            return {
                ...previousvalue,
                [name]: value,
            }



        });
    };
    const showdata = (event) => {
        event.preventDefault();

        try {
            if (
                axios.post(`http://localhost:9009/coupons/add`, {
                    id: input.id,
                    couponName: input.couponName,
                    couponCode: input.couponCode,
                    couponTitle: input.couponTitle,
                    couponType: input.couponType,
                  
                })
                    .then(response => {
                        console.log(response.data);


                    })) { alert("uploaded") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    // ..............................................................
    const updateCoupon = (event,id) => {
        event.preventDefault();

        try {
            if (
                axios.put(`http://localhost:9009/coupons/update${id}`, {
                    id: input.id,
                    couponName: input.couponName,
                    couponCode: input.couponCode,
                    couponTitle: input.couponTitle,
                    couponType: input.couponType,
                  
                   
                })
                    .then(response => {
                        console.log(response);


                    })) { alert("Data updated") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }



    return (
        <>
           

            <div class="text-center mt-4 name"> <h1>Add and Update Coupon Details</h1></div>

            {/* Basic form here */}


            <div class="wrapper" >
                <div class="text-center mt-4 name"> Add/Update </div>

                <div class="card">
                    <div class="card-deck col-sm-3">
 
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="couponName" id="couponName" placeholder=' couponName' onChange={inputEvent} value={input.couponName} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="couponCode" id="couponCode" placeholder='couponCode' onChange={inputEvent} value={input.couponCode} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="couponTitle" id="couponTitle" placeholder='couponTitle' onChange={inputEvent} value={input.couponTitle} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="couponType" id="couponType" placeholder='couponType' onChange={inputEvent} value={input.couponType} required /> </div>
                   
                    <button class="btn mt-1" type="submit" onClick={showdata}>Add</button>
                    <button class="btn mt-1" type='submit' onClick={updateCoupon} >Update</button>
                </form>
            </div>
            </div>
            </div>




        </>
    )
}

export default EditCoupon;
