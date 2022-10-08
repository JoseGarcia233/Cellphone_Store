/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function ListCellphone() {
    const style1 = {width:'18rem' }
    const img4 = 'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge30-neo-1.jpg';
  return (
    <div class="card" style={style1}>
  <img class="card-img-top" src="https://specs-tech.com/wp-content/uploads/2022/08/Motorola-Edge-30-Neo-4.jpg" alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#/" class="btn btn-primary">Go somewhere</a>
  </div>
  <div className="ncard">
  <div class="card" style={style1}>
  <img class="card-img-top" src="https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge30-neo-1.jpg" alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#/" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
</div>
  )
}
