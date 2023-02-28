import React from 'react'
import Item from './Item'
import Cart from './Cart'


const HomeContainer = () => {
  return (
    <div className='home_container'>  
    <container className='col-md-10'>
      
      <div className="container-fluid my-2">
    <div className="row">
      <div className="col-md-8 ">
        <Item />
      </div>
      <div className="col-md-4"  >
        <Cart />
      </div>
    </div>
  </div>
  </container></div>
  )
}

export default HomeContainer