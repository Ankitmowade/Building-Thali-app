import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTothali } from "../redux/slice";
const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price)
    dispatch(addTothali(item));
    console.log(addTothali(item))
  }

  const increment = () => {
    setQuantity(quantity + 1)

  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (<>
    <div className='container  border  mt-2' >
      <img src={data.image} style={{ height: "180px", width: "100%" ,marginBottom:"8px"}} />
      <div className='d-flex justify-content-between'>
        <h3 className='mx-3 bg-light text-danger px-2'>{data.name}</h3>
      
        <h2 className='mx-4 bg-info text-light px-3'> ₹{data.price}</h2>
      </div>
      <h6>{data.description}</h6>

      <div className='qwt_set_btn'>
     
        <div>
          
          <button className='btn' onClick={() => add(data)} ><h4>Add</h4></button>
        </div>

      </div>
    </div>

  </>

  )
}

export default Product