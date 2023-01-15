import { Card } from '@material-ui/core';
import React from "react";
import { Button } from 'react-bootstrap';
const quantity=[1,2,3,4,5,6,7,8,9,10]
const CardSection=()=>{
  return(
<>
<Card>
    <div style={{margin:"10px"}}>
    <span className='rupee'>₹</span>
    <span className='text'>579</span>
    <span className='rupee'>00</span>
    </div>
    <div style={{margin:"10px"}}>
      <a href="#"  >Free Delivery </a>
      <span style={{fontWeight:700}}>Thursday, 19 January </span>
      <span>on first order. <a href="#">Details</a></span>
    </div>
     <div style={{margin:"10px"}}>
     <span>Or fastest delivery </span>
     <span style={{fontWeight:700}}>Wednesday, 18 January. </span>
     <span>Order within </span>
     <span className="success"> 11 hrs 10 mins. <a href="#" >Details</a></span> 
     </div>

     <div style={{margin:"10px"}} className="success size">
        In Stock
     </div>
      <div style={{margin:"10px"}}>
      <span>Sold by <a href="#">Cocoblu Retail </a> and <a href="#">Fulfilled by Amazon.</a></span>
      </div>
      <div style={{margin:"10px"}}>
       Quantity:
        <select>
         {
            quantity.map(i=>
                <option>
                    {i}  
                </option> )
        }
        </select>
        </div>
        <div style={{margin:"10px"}}>
            <Button className="cart common">Add to Cart</Button>
        </div>
        
        <div style={{margin:"10px"}}>
        <Button className="buyNow common">Buy Now</Button>
        </div>
        <br/>
</Card>
</>
  )  
}

export default CardSection;