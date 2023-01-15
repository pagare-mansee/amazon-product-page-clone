import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import "../css/MainPage.css";
import CardSection from './CardSection';
import BasicModal from './modal';
import ProductDetails from './ProductDetails';
import { Review } from './review';
import Thumbnails from './ShowThumbnails';
import ThirdSection from './ThirdSection';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal() {
    this.setState({ open: true })

  }
  hideModal() {
    this.setState({ open: false })
  }
  render() {
    return (

      <div>

        <Grid container style={{ marginTop: "20px" }}>

          <Grid item lg={1}>
            <Thumbnails />
          </Grid>

          <Grid item lg={5}>
            <div style={{ width: "676", height: "879", cursor: "pointer" }}>
              <img id="imgMain" src={require("../Images/Bimg1.jpg")} width={`100%`} height={'100%'}
                onClick={(e) => this.showModal(e)}></img>
            </div>

          </Grid>

          <Grid item lg={3} style={{ marginLeft: "25px" }}>
            <ThirdSection />
          </Grid>

          <Grid item lg={2} style={{ marginLeft: "35px" }}>
            <CardSection></CardSection>
          </Grid>
        </Grid>
        <BasicModal show={this.state.open} handleClose={this.hideModal} />
        <ProductDetails />
        <hr />
        <Review />
      </div>
    )

  }

}

export default MainPage;