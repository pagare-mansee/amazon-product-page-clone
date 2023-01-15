import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Rating } from 'react-simple-star-rating';
export function Review() {

    return (
    <div className="row ms-2" id="rating">
         <div className="col-md-4 ">
        <h2>Customer Reviews</h2>
          <div >
            <h6>
            <Rating
            initialValue={4}
            size={25}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo' // Will remove the inline style if applied
            />
            &nbsp; 4 out of 5</h6>
            <p>28,023 global ratings</p>
        </div>

        <div className="row mt-0">
                <div className="col-md-2">
                    <div className="ms-3 mt-3 mb-2 text-primary">5 star</div>
                    <div className="ms-3 mt-2 mb-2 text-primary">4 star</div>
                    <div className="ms-3 mt-2 mb-2 text-primary">3 star</div>
                    <div className="ms-3 mt-2 mb-2 text-primary">2 star</div>
                    <div className="ms-3 mt-2 mb-2 text-primary">1 star</div>
                </div>
                <div className="col-md-5 p-1">
                    <ProgressBar className="mt-3 mb-3" now={47} variant="warning" visuallyHidden />
                    <ProgressBar className="mt-3 mb-3" now={28} variant="warning" visuallyHidden />
                    <ProgressBar className="mt-3 mb-3" now={13} variant="warning" visuallyHidden />
                    <ProgressBar className="mt-3 mb-3" now={5} variant="warning" visuallyHidden />
                    <ProgressBar className="mt-3 mb-3" now={8} variant="warning" visuallyHidden />
                </div>
                <div className="col-md-1 m-1 p-1">
                    <div className="m-2 text-primary">47%</div>
                    <div className="m-2 text-primary">28%</div>
                    <div className="m-2 text-primary">13%</div>
                    <div className="m-2 text-primary">5%</div>
                    <div className="m-2 text-primary">8%</div>
                </div>
        </div>

        <hr className='col-md-10 mt-3'/>

        <h5 className='mt-4'>By feature</h5>

        <div className='row'>

            <div className="col-md-5">
                <div className='my-2'>Comfort</div>
                <div className='my-2'>Value for money</div>
                <div className='my-2'>Quality of material</div>
            </div>

            <div className="col-md-5">
                <p className='mt-2 mb-1'>
                    <Rating initialValue={4} size={20} fillColor='orange'
                        emptyColor='gray' readonly className="mb-1"
                    />
                    &nbsp; 4
                </p>
                <p className='my-1'>
                    <Rating initialValue={3} size={20} fillColor='orange'
                        emptyColor='gray' border='orange' readonly className='mb-1'
                    />
                    &nbsp; 3
                </p>
                <p className='my-1'>
                    <Rating initialValue={4} size={20} fillColor='orange'
                        emptyColor='gray' readonly className='mb-1'
                    />
                    &nbsp; 4
                </p>
            </div>

        </div>

        <hr className='col-md-10 mt-3'/>

        <h5 className='mt-4'>Review this product</h5>
        <p>share your thoughts with other customers</p>
        <button style={{fontSize:'13px'}}className="p-1 shadow-sm border-0 border-top border-dark rounded btn col-md-8">Write a product review</button>

        <hr className='col-md-10 mt-4'/>
      </div>

      <div className="col-md-5">
        <h5 style={{paddingTop:"10px"}}>Reviews with images</h5>
        <div className="d-flex justify-content-around">
            <img src='https://m.media-amazon.com/images/I/71J5OkZur8L._CR0,577,950,950_UX175.jpg' width={150} height={150}></img>
            <img src='https://m.media-amazon.com/images/I/81qp-D8jidL._CR0,204,1224,1224_UX175.jpg' width={150} height={150}></img>
            <img src='https://m.media-amazon.com/images/I/71cSPZlFO-L._CR0,204,1224,1224_UX175.jpg' width={150} height={150}></img>
            <img src='https://m.media-amazon.com/images/I/61f-WlWEFkL._CR0,204,1224,1224_UX175.jpg' width={150} height={150}></img>
        </div>
        <p style={{ fontSize: '15px', color:'blue'}}>see all customer images</p>
        <div className='mt-4'>
            <h5>Read reviews that mention</h5>
        </div>
        <div className="d-flex justify-content-start">
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">van heusen</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">value</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">cotton polyester</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">waste of money</button>
        </div>
        <div className="d-flex justify-content-start">
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">good quality</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">poor quality</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">shown in picture</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">perfect fit</button>
        </div>
        <div className="align-self-start">
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">looks like</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">bad quality</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">quality is good</button>
           <button style={{ fontSize: '13px', backgroundColor:'#deeaee'}} className="px-3 py-1 m-2 btn-xs border-0 border-bottom border-dark">brand name</button>
        </div>

        <h5 className='mt-4'>Top reviews from India</h5>

        <p className=' mt-4 mb-0'><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" width={35} height={35}></img>  &nbsp; sviShalv</p>
        <h6 className='mt-0'>
            <Rating
            initialValue={4}
            size={20}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo mb-1' // Will remove the inline style if applied
            />
            &nbsp; Good quality & fit. They screwed up logo colours.
        </h6>
        <p style={{color:"grey"}} className='my-0'>Reviewed in India 🇮🇳 on 24 December 2022</p>
        <p style={{color:"grey"}} className='my-0'>Size: XL | Color: Black | Verifies Purchase</p>
        <p className='my-0'>It's a great piece of garment from a popular brand. Quality of clothe and fit are as expected. However one buys such products for the brand it shows off... Where they have screwed up. The two colours in the Van Heusen logo (in this product) are biege and white. Looks hotch porch of shield and alphabets V-H. Doesn't look good. At all.</p>
        <div className='row mt-2'>
            <button style={{fontSize:'15px'}}className="p-1 shadow border-0 border-top border-dark rounded btn col-md-3">Helpful</button> &nbsp;&nbsp;&nbsp;|
            <button style={{fontSize:'15px'}}className="p-1  border-0 btn col-md-3">Report abuse</button>
        </div>

        <p className=' mt-4 mb-0'><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" width={35} height={35}></img>  &nbsp; P Deka</p>
        <h6 className='mt-0'>
            <Rating
            initialValue={4}
            size={20}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo mb-1' // Will remove the inline style if applied
            />
            &nbsp; Nice color & Fabric
        </h6>
        <p style={{color:"grey"}} className='my-0'>Reviewed in India 🇮🇳 on 2 January 2023</p>
        <p style={{color:"grey"}} className='my-0'>Size: M | Color: Yellow | Verifies Purchase</p>
        <p className='my-0'>Nice color & Fabric. Fitting as expected . After first couple of wash we can judge the actual material</p>
        <div className='row mt-2'>
            <button style={{fontSize:'15px'}}className="p-1 shadow border-0 border-top border-dark rounded btn col-md-3">Helpful</button> &nbsp;&nbsp;&nbsp;|
            <button style={{fontSize:'15px'}}className="p-1  border-0 btn col-md-3">Report abuse</button>
        </div>

        <p className=' mt-4 mb-0'><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" width={35} height={35}></img>  &nbsp; gurunath</p>
        <h6 className='mt-0'>
            <Rating
            initialValue={4}
            size={20}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo mb-1' // Will remove the inline style if applied
            />
            &nbsp;  Fits perfectly only this is my personal problem that my arms where huge so little prob there
        </h6>
        <p style={{color:"grey"}} className='my-0'>Reviewed in India 🇮🇳 on 20 December 2022</p>
        <p style={{color:"grey"}} className='my-0'>Size: 2XL | Color: Purple | Verifies Purchase</p>
        <p className='my-0'>My arms are huge in proportion to my body so it was a little tight from arms as the elastic there is not stretchable so ya. Rest good</p>
        <div className='row mt-2'>
            <button style={{fontSize:'15px'}}className="p-1 shadow border-0 border-top border-dark rounded btn col-md-3">Helpful</button> &nbsp;&nbsp;&nbsp;|
            <button style={{fontSize:'15px'}}className="p-1  border-0 btn col-md-3">Report abuse</button>
        </div>

        <p className=' mt-4 mb-0'><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" width={35} height={35}></img>  &nbsp; Akash</p>
        <h6 className='mt-0'>
            <Rating
            initialValue={4}
            size={20}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo mb-1' // Will remove the inline style if applied
            />
            &nbsp; Good Fit
        </h6>
        <p style={{color:"grey"}} className='my-0'>Reviewed in India 🇮🇳 on 25 December 2022</p>
        <p style={{color:"grey"}} className='my-0'>Size: XL | Color: Black | Verifies Purchase</p>
        <p className='my-0'>Good quality product, fits well but one con lack of pocket. Other than that everything is fine.</p>
        <div className='row mt-2'>
            <button style={{fontSize:'15px'}}className="p-1 shadow border-0 border-top border-dark rounded btn col-md-3">Helpful</button> &nbsp;&nbsp;&nbsp;|
            <button style={{fontSize:'15px'}}className="p-1  border-0 btn col-md-3">Report abuse</button>
        </div>

        <p className=' mt-4 mb-0'><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" width={35} height={35}></img>  &nbsp; Suman</p>
        <h6 className='mt-0'>
            <Rating
            initialValue={4}
            size={20}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo mb-1' // Will remove the inline style if applied
            />
            &nbsp; Not Bad
        </h6>
        <p style={{color:"grey"}} className='my-0'>Reviewed in India 🇮🇳 on 28 December 2022</p>
        <p style={{color:"grey"}} className='my-0'>Size: s | Color: Teal | Verifies Purchase</p>
        <p className='my-0'>Not Bad</p>
        <div className='row mt-2'>
            <button style={{fontSize:'15px'}}className="p-1 shadow border-0 border-top border-dark rounded btn col-md-3">Helpful</button> &nbsp;&nbsp;&nbsp;|
            <button style={{fontSize:'15px'}}className="p-1  border-0 btn col-md-3">Report abuse</button>
        </div>

        <p className=' mt-4 mb-0'><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" width={35} height={35}></img>  &nbsp; Banerjee</p>
        <h6 className='mt-0'>
            <Rating
            initialValue={4}
            size={20}
            fillColor='orange'
            emptyColor='gray'
            readonly
            className='foo mb-1' // Will remove the inline style if applied
            />
            &nbsp; Great Purchase
        </h6>
        <p style={{color:"grey"}} className='my-0'>Reviewed in India 🇮🇳 on 24 December 2022</p>
        <p style={{color:"grey"}} className='my-0'>Size: XL | Color: Flame Orange | Verifies Purchase</p>
        <p className='my-0'>Excellent quality and with equally bright color</p>
        <div className='row mt-2'>
            <button style={{fontSize:'15px'}}className="p-1 shadow border-0 border-top border-dark rounded btn col-md-3">Helpful</button> &nbsp;&nbsp;&nbsp;|
            <button style={{fontSize:'15px'}}className="p-1  border-0 btn col-md-3">Report abuse</button>
        </div>
      </div>
      
    </div>  
    );
  }
  
 