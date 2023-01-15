
import React from "react";
import { Link } from "react-router-dom";


function Header()
 {
  return (
                <div className="navbar__component">
                <a href="https://www.amazon.in/ref=nav_logo">
                    <div> <img src={require("../Images/logo.png")} className="navbar__logo"/></div>
                </a>
                <div>
                <div style={{ fontSize: "10px", color:"white",marginTop:"10px",marginLeft:"10px"}}>Hello</div>
                <div className="navbar__locator">
                   <div className="navbar__locatorImage"></div>
                    <div className="navbar__location"> Select your address</div>
                </div>
                </div>
                <div className="navbar__searchcomponent">
                    <div>
                        <select className="nav__dropdown">
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar__searchbox" />
                    </div>
                    <div className="navbar__seaarchboxdiv">
                        <div className="navbar__searchicon" />
                    </div>
                </div>
                <div className="navbar_text navbar__signin">
                    <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
                    <div style={{ fontWeight: "bold" }}>Account & Lists</div>
                </div>
                <div className="navbar_text navbar__returns">
                    <div style={{ fontSize: "14px" }}>Returns</div>
                    <div style={{ fontWeight: "bold" }}> & Orders</div>
                </div>
                <Link to="/checkout">
                <div className="navbar_text navbar__cart">
                    <div src="" className="cart__image" ></div>
                    <div className="cart__item"> 0 </div>
                    <div className="navbar_text_cart">Cart</div>
                </div>
                </Link>
                
            </div>
            )
            }
            export default Header