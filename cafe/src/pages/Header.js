import React, { Fragment } from 'react'
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
    }from 'react-router-dom';
function Header() {
  return (
    <div>
  <Fragment>
  <nav class="tm-nav">
              <ul>
                <li>
                  {/* <a href="index.html" class="active">Home</a> */}
                  <Link class="active" to="/">Home</Link>
                  </li>
                <li>
                  {/* <a href="today-special.html">Today Special</a> */}
                  <Link to="/Today_special">Today_Special</Link>
                  </li>
                <li>
                  {/* <a href="menu.html">Menu</a> */}
                  <Link to="/Menu">Menu</Link>
                  </li>
                <li>
                  {/* <a href="contact.html">Contact</a> */}
                  <Link to="/Contact">Contact</Link>
                  </li>
                
              </ul>
            </nav> 


  </Fragment>
    </div>
  )
}

export default Header