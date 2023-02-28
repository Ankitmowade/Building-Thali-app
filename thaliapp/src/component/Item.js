import React from 'react';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Item() {

  const productData=useSelector(state=>state.counter.products)

  return(
    <div className='container item_item'>
     <h1 className='text-center text-success' align="center" style={{color: "red" ,backgroundColor: "black"}}><marquee> MENU </marquee></h1>
    <div className='row my-3' > 

      {
        productData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Item;