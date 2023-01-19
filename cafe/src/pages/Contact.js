import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'

import react from "react"
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,



}from"react-router-dom";
function contact() {
  return (
    <div>
    <Fragment>
    
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
    {/* <!-- End Preloader --> */}
    <div className="tm-top-header">
      <div className="container">
        <div className="row">
          <div className="tm-top-header-inner">
            <div className="tm-logo-container">
              <img src="assets/img/logo.png" alt="Logo" className="tm-site-logo"/>
              <h1 className="tm-site-name tm-handwriting-font">Cafe House</h1>
            </div>
            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>
            <Header/>
          </div>           
        </div>    
      </div>
    </div>
    <section className="tm-welcome-section">
      <div className="container tm-position-relative">
        <div className="tm-lights-container">
          <img src="assets/img/light.png" alt="Light" className="light light-1"/>
          <img src="assets/img/light.png" alt="Light" className="light light-2"/>
          <img src="assets/img/light.png" alt="Light" className="light light-3"/>  
        </div>        
        <div className="row tm-welcome-content">
          <h2 className="white-text tm-handwriting-font tm-welcome-header"><img src="assets/img/header-line.png" alt="Line" className="tm-header-line"/>&nbsp;Contact Us&nbsp;&nbsp;<img src="assets/img/header-line.png" alt="Line" className="tm-header-line"/></h2>
          <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
          <p className="gray-text tm-welcome-description">Cafe House is free <span className="gold-text">responsive Bootstrap</span> v3.3.5 layout by <span className="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
          <a href="#main" className="tm-more-button tm-more-button-welcome">Message Us</a>      
        </div>
        <img src="assets/img/table-set.png" alt="Table Set" className="tm-table-set img-responsive"/>            
      </div>      
    </section>
    <div className="tm-main-section light-gray-bg">
      <div className="container" id="main">
        <section className="tm-section row">
          <h2 className="col-lg-12 margin-bottom-30">Send us a message</h2>
          <form action="#" method="post" className="tm-contact-form">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input type="text" id="contact_name" className="form-control" placeholder="NAME" />
              </div>
              <div className="form-group">
                <input type="email" id="contact_email" className="form-control" placeholder="EMAIL" />
              </div>
              <div className="form-group">
                <input type="text" id="contact_subject" className="form-control" placeholder="SUBJECT" />
              </div>
              <div className="form-group">
                <textarea id="contact_message" className="form-control" rows="6" placeholder="MESSAGE"></textarea>
              </div>
              <div className="form-group">
                <button className="tm-more-button" type="submit" name="submit">Send message</button> 
              </div>               
            </div>
            <div className="col-lg-6 col-md-6">
              <div id="google-map"></div>
            </div> 
          </form>
        </section>
      </div>
    </div> 
   <Footer/>
    </Fragment>
    
    </div>
  )
}

export default contact