import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        
        <div className='main-footer ' >
            <div className='container'>
                <div className='row '>
                    {/*Coloum1 */}
                    <div className='col'>
                        <h4>COUPON DOKS</h4>
                        <ul className='list-unstyles'>
                            <li>244001</li>
                            <li>Moradabad,India</li>
                            <li>west Up</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className='col'>
                        <h4>HELP</h4>
                        <ul className='list-unstyles'>
                            <li>FAQs</li>
                            <li>How it works</li>
                            <li>Cashback Claims</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className='col'>
                        <h4>DEALS COUPON</h4>
                        <ul className='list-unstyles'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li> List your business</li>
                            <li>Switch to Desktop Site</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm  d-flex justify-content-center'>
                    &copy;{new Date().getFullYear()}Just Make New One &CopounApp!All rights reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer