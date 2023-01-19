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

function Today_special() {
  return (
    <div>
    <Fragment>
      
    {/* <!-- Preloader --> */}
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div classNameName="loader-section section-right"></div>
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
          <h2 className="white-text tm-handwriting-font tm-welcome-header"><img src="assets/img/header-line.png" alt="Line" className="tm-header-line"/>&nbsp;Today's Special&nbsp;&nbsp;<img src="assets/img/header-line.png" alt="Line" className="tm-header-line"/></h2>
          <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
          <p className="gray-text tm-welcome-description">Cafe House template is a <span className="gold-text">mobile-friendly</span> responsive Bootstrap v3.3.5 layout by <span className="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
          <a href="#main" className="tm-more-button tm-more-button-welcome">Read More</a>      
        </div>
        <img src="assets/img/table-set.png" alt="Table Set" className="tm-table-set img-responsive"/>
      </div>      
    </section>
    <div className="tm-main-section light-gray-bg"/>
      <div className="container" id="main">
        <section className="tm-section tm-section-margin-bottom-0 row">
          <div className="col-lg-12 tm-section-header-container">
            <h2 className="tm-section-header gold-text tm-handwriting-font"><img src="assets/img/logo.png" alt="Logo" className="tm-site-logo"/> Popular Items</h2>
            <div className="tm-hr-container"><hr className="tm-hr"/></div>
          </div>
          <div className="col-lg-12 tm-popular-items-container">
            <div className="tm-popular-item">
              <img src="assets/img/popular-1.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">a</span>mericano</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src="assets/img/popular-2.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">c</span>appuccino</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src="assets/img/popular-3.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">m</span>ocha</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src="assets/img/popular-1.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">a</span>mericano</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src="assets/img/popular-2.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">c</span>appuccino</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src="assets/img/popular-3.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">m</span>ocha</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
          </div>       
        </section>
        <section className="tm-section">
          <div className="row">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="tm-section-header gold-text tm-handwriting-font"><img src="assets/img/logo.png" alt="Logo" className="tm-site-logo"/> Daily Menu</h2> 
              <div className="tm-hr-container"><hr className="tm-hr"/></div> 
            </div>  
          </div>          
          <div className="row">
            <div className="tm-daily-menu-container margin-top-60">
              <div className="col-lg-4 col-md-4">
                <img src="assets/img/menu-board.png" alt="Menu board" className="tm-daily-menu-img"/>      
              </div>            
              <div className="col-lg-8 col-md-8">
                <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                <ol className="margin-top-30">
                  <li>Tellus eget condimentum rhoncus.</li> 
                  <li>Sem quam semper libero.</li>
                  <li>Sit amet adipiscing sem neque sed ipsum.</li> 
                  <li>Nam quam nunc, blandit vel, luctus pulvinar.</li> 
                  <li>Maecenas nec odio et ante tincidunt tempus.</li> 
                  <li>Donec vitae sapien ut libero ventenatis faucibus.</li> 
                </ol>
                <a href="#" className="tm-more-button margin-top-30">Read More</a>    
              </div>
            </div>
          </div>          
        </section>
      </div>
    
     <Footer/>


    </Fragment>

    </div>
  )
}

export default Today_special