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

function menu() {
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
          <h2 className="white-text tm-handwriting-font tm-welcome-header"><img src="assets/img/header-line.png" alt="Line" className="tm-header-line"/>&nbsp;Our Menus&nbsp;&nbsp;<img src="assets/img/header-line.png" alt="Line" className="tm-header-line"/></h2>
          <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
          <p className="gray-text tm-welcome-description">Cafe House template is a mobile-friendly responsive <span className="gold-text">Bootstrap v3.3.5 layout</span> by <span className="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
          <a href="#main" className="tm-more-button tm-more-button-welcome">Read More</a>      
        </div>
        <img src="assets/img/table-set.png" alt="Table Set" className="tm-table-set img-responsive"/>  
      </div>      
    </section>
    <div className="tm-main-section light-gray-bg">
      <div className="container" id="main">
        <section className="tm-section row">
          <div className="col-lg-9 col-md-9 col-sm-8">
            <h2 className="tm-section-header gold-text tm-handwriting-font">Variety of Menus</h2>
            <h2>Cafe House</h2>
            <p className="tm-welcome-description">This is free HTML5 website template from <span className="blue-text">template</span><span className="green-text">mo</span>. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.</p>
            <a href="#" className="tm-more-button margin-top-30">Read More</a> 
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
            <div className="inline-block shadow-img">
              <img src="assets/img/1.jpg" alt="Image" className="img-circle img-thumbnail"/>  
            </div>              
          </div>            
        </section>          
        <section className="tm-section row">
          <div className="col-lg-12 tm-section-header-container margin-bottom-30">
            <h2 className="tm-section-header gold-text tm-handwriting-font"><img src="assets/img/logo.png" alt="Logo" className="tm-site-logo"/> Our Menus</h2>
            <div className="tm-hr-container"><hr className="tm-hr"/></div>
          </div>
          <div>
            <div className="col-lg-3 col-md-3">
              <div className="tm-position-relative margin-bottom-30">              
                <nav className="tm-side-menu">
                  <ul>
                    <li><a href="#" className="active">Affogato</a></li>
                    <li><a href="#">Caffè Americano</a></li>
                    <li><a href="#">Caffè latte</a></li>
                    <li><a href="#">Coffee milk</a></li>
                    <li><a href="#">Café mocha</a></li>
                    <li><a href="#">Cappuccino</a></li>
                    <li><a href="#">Espresso</a></li>
                    <li><a href="#">Iced coffee</a></li>
                    <li><a href="#">Instant coffee</a></li>
                    <li><a href="#">Mocha</a></li>
                    <li><a href="#">black coffee</a></li>
                  </ul>              
                </nav>    
                <img src="assets/img/vertical-menu-bg.png" alt="Menu bg" className="tm-side-menu-bg"/>
              </div>  
            </div>            
            <div className="tm-menu-product-content col-lg-9 col-md-9">
               {/* <!-- menu content --> */}
              <div className="tm-product">
                <img src="assets/img/menu-1.jpg" alt="Product"/>
                <div className="tm-product-text">
                  <h3 className="tm-product-title">Americano 1</h3>
                  <p className="tm-product-description">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
                </div>
                <div className="tm-product-price">
                  <a href="#" className="tm-product-price-link tm-handwriting-font"><span className="tm-product-price-currency">$</span>30</a>
                </div>
              </div>
              <div className="tm-product">
                <img src="assets/img/menu-2.jpg" alt="Product"/>
                <div className="tm-product-text">
                  <h3 className="tm-product-title">Americano 2</h3>
                  <p className="tm-product-description">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
                </div>
                <div className="tm-product-price">
                  <a href="#" className="tm-product-price-link tm-handwriting-font"><span className="tm-product-price-currency">$</span>20</a>
                </div>
              </div>
              <div className="tm-product">
                <img src="assets/img/menu-3.jpg" alt="Product"/>
                <div className="tm-product-text">
                  <h3 className="tm-product-title">Americano 3</h3>
                  <p className="tm-product-description">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
                </div>
                <div className="tm-product-price">
                  <a href="#" className="tm-product-price-link tm-handwriting-font"><span className="tm-product-price-currency">$</span>15</a>
                </div>
              </div>
              <div className="tm-product">
                <img src="assets/img/menu-4.jpg" alt="Product"/>
                <div className="tm-product-text">
                  <h3 className="tm-product-title">Americano 4</h3>
                  <p className="tm-product-description">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
                </div>
                <div className="tm-product-price">
                  <a href="#" className="tm-product-price-link tm-handwriting-font"><span className="tm-product-price-currency">$</span>25</a>
                </div>
              </div>
              <div className="tm-product">
                <img src="assets/img/menu-5.jpg" alt="Product"/>
                <div className="tm-product-text">
                  <h3 className="tm-product-title">Americano 5</h3>
                  <p className="tm-product-description">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
                </div>
                <div className="tm-product-price">
                  <a href="#" className="tm-product-price-link tm-handwriting-font"><span className="tm-product-price-currency">$</span>45</a>
                </div>
              </div>
            </div>
          </div>          
        </section>
      </div>
    </div> 



     <Footer/>
     </Fragment>
     


    </div>
  )
}

export default menu