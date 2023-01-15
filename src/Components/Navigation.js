import React, { Component } from 'react';
import "../css/NavBar.css";

class NavBar extends Component {

    constructor(props) {
        super(props);
    }
    render() { 
 
        return ( 
                   <div className="navbar__footer">
                    <button>Amazon miniTV</button>
                    <button>Sell</button>
                    <button>Best Sellers</button>
                    <button>Mobiles</button>
                    <button>Today's deals</button>
                    <button>Customer Service</button>
                    <button>Electronics</button>
                    <button>Prime</button>
                    <button>Fashion</button>
                    <button>Amazon Pay</button>
                    <button>Home & Kitchen</button>
                    <br/>
                </div>
           
        );
    }
}
 
export default NavBar;