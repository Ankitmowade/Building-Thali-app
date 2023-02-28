import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali.length)
  return (
    <div className='header'>
      <div className="logo">
       
        <h5 className='logo_name'></h5>
      </div>
     <div className="cart">
       <h1 className='mx2' margin='center' style={{backgroundColor: "lightblue"}}> Thali app</h1>
      <button className="btn2" margin="right">
          My Cart <button>{thali.length} items</button></button>
</div>
    </div>
  )
}

export default Navbar
