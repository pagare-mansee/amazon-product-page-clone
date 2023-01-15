import { Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';
import { Card } from 'react-bootstrap';
import imagerray from '../constants/imageDetails';
import productDetails from '../constants/productDetails';
import size from '../constants/size.js';

const changeSelected=(e)=>{
    console.log(e.target.id)
    document.getElementById("S").innerHTML=e.target.id;
}
const ThirdSection = () => {
    return (
        <div>
              <a href="https://www.amazon.in/stores/VanHeusen/page/10EC8D0F-9346-4C8B-8561-758087DF07A1?ref_=ast_bln">
                Visit the Van Heusen Store</a>

            <p className='name'>{productDetails.name}</p>
            <Rating name="read-only" value={productDetails.stars} readOnly style={{ fontSize: "18px" }} />
            <a href="#rating"> {productDetails.ratings} ratings | {productDetails.answered} answered questions</a>
            <hr />

            <h3 style={{ color: "#CC0C39" }}>Prime Early Deal</h3>

            <span className='text' style={{ color: "#CC0C39" }}>-36% </span>
            <span className='rupee'>₹</span>
            <span className='text'>579</span>

            <p >
                <span className='mrp'>M.R.P.: </span>
                <span className="mrp" style={{ textDecoration: "line-through" }}>₹1099</span>
            </p>

            <Grid container>

                {
                    imagerray.map(obj => (

                        <Grid item lg={3}>
                            <figure>
                                <img src={require(`../Images/${obj.source}`)} alt="" />
                                <figcaption><a href="">{obj.caption}</a></figcaption>
                            </figure>
                        </Grid>
                    ))

                }
            </Grid>
            <hr />
            <div>Size: {<b id="S">M</b>}</div>
            <div>

                {size.map(s => (
                    <Card id={s} style={{ width: "81px", height: "81px", float: "left", margin: "6px", border: "solid #f7f7f7 1px", cursor: "pointer" }}
                        onMouseOver={(e) => { changeSelected(e) }}>
                        <div style={{ background: "#f7f7f7", height: "50%", paddingTop: "3px" }} id={s}>
                            {s}
                        </div>
                        <div id={s}>
                            ₹579.00
                        </div>
                    </Card>
                ))
                }
            </div>
        </div>
    )
}

export default ThirdSection