/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/listcellp.css';

export default function ListCellphone() {
    const style1 = {width:'18rem' }
    const img4 = 'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge30-neo-1.jpg';
  return (
    <div className="contanerC">
    <div className="card" >

        <img className="card-img-top" src="https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge30-neo-1.jpg" alt="Card image cap" /> 
   
  <div className="card-body">
    <h6 className="card-title"> <b>Brand:</b> motorola </h6>
    <h6 className="card-text"><b>Model:</b> G4</h6>
    <h6 className="card-text"><b>Storage:</b> 32gb</h6>
    <h6 className="card-text"><b>Price:</b> 10000</h6>
    <a href="#/" class="btn btn-primary">Go somewhere</a>
  </div>
 
</div>
  </div>
  )
}
