import { Grid } from '@material-ui/core';
import React from 'react';
import Modal from 'react-modal';
import '../css/modal.css';
import ModalThumbnails from './ModalThumnails';

function BasicModal(props) {

  const style={
    overlay: {
      position: 'fixed',
      top: 100,
      left: 30,
      right: 30,
      bottom: 100,
      backgroundColor: 'white',
      border:"1px solid white"
    },
    content: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: "0px",
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'hidden',
      borderRadius: '8px',
      outline: 'none',
      paddingTop: '0px',
      backgroundColor: 'white'
    }
  }
  return (

    <div>  
      <Modal
        isOpen={props.show}
        style={style}
        onRequestClose={props.handleClose}>
    
        <span onClick={props.handleClose} style={{float:"right",cursor:"pointer"}}>X</span>
        <Grid container >
        <Grid item lg={2}>
          <h4 style={{color:"#039"}}>Van Heusen Men's Regular Fit Polo Shirt</h4>
          <p className="des">Size : M</p>
          <div className="des">Colour : Black</div>
          <ModalThumbnails/>
        </Grid>
        <Grid item lg={10} style={{textAlign:"center"}}>
         <img src={require('../Images/Bimg1.jpg')} id="modalImg" height="502px" width="401.592px"/>
        </Grid>
        </Grid>
        
      </Modal>
    </div>
  );
}
export default BasicModal;