import { Card } from '@material-ui/core';
import React from 'react';
import '../css/modal.css';
const tshirt=["Bimg1.jpg",
"Bimg2.jpg",
"Bimg3.jpg"]



const showImageAtModal=(e)=>{
    document.getElementById("modalImg").src=e.target.src;
}

const ModalThumbnails=()=>{
    return(
    <Card style={{border:"1px solid  #C9E1F4",borderRadius:"0px",marginTop:"10px",width:
    "200px"}}>
       <div style={{textAlign:"center",height:"30px",backgroundColor:"#EAF3FD"}}>
          <select>
            <option>All Media (3)</option>
            <option>Images (3)</option>
            <option>Videos (0)</option>
          </select>
       </div>
       <div>
    {tshirt.map(image=>(
        <div style={{border:"1px solid black",margin:"12px",width:"38px", height:"50px",float:"left"}}>
        <img src={require(`../Images/${image}`)} alt="img1"  style={{width:"38px", height:"50px",cursor:"pointer"}}
       onClick={(e)=>showImageAtModal(e)}></img>
        </div>
    ))}
    </div>
</Card>
    )
}

export  default ModalThumbnails