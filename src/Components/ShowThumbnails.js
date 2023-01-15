import React from 'react';

const tshirt=["Bimg1.jpg",
"Bimg2.jpg",
"Bimg3.jpg"]

const showImage=(e)=>{
    document.getElementById("imgMain").src=e.target.src;
  }

const Thumbnails=()=>{
    return(
    <ul>
    {tshirt.map(image=>(
        <li>
        <img src={require(`../Images/${image}`)} alt="img1"  style={{width:"38px", height:"50px",cursor:"pointer"}}
        onMouseOver={(e)=>showImage(e)}></img>
        </li>
    ))}
</ul>
    )
}

export  default Thumbnails