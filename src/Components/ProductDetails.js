import React from "react";
import '../css/NavBar.css';

const details=[
    {
        param:"Product Dimensions",
        value:" 27 x 22 x 0.5 cm; 250 Grams"
    },
    {
        param:"Date First Available ",
        value:" 11 October 2017"
    },
    {
        param:"Manufacturer",
        value:" ABFRL"
    },
    {
        param:"ASIN",
        value:"  B076CJQPX2"
    },
    {
        param:"Date First Available ",
        value:" 11 October 2017"
    },
    {
        param:"Item model number",
        value:" VSKP517S011408"
    },
    {
        param:"Country of Origin ",
        value:"  India"
    }
]
const ProductDetails=()=>{
    return(
   <>
   <hr className="hrClass"/>
    
<div className="productDiv">
    <h2>Product details</h2>

    <div style={{marginLeft:"25px"}}>
             {
            details.map(o=>
       <div style={{marginBottom:"5px"}}><b>{o.param}</b> : {o.value}</div>
            )
        }
      </div>
    
</div>
</>
    )

}

export default ProductDetails