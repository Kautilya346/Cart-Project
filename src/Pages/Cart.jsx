import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';



function Cart(){

    const {cart}=useSelector((state)=>state)
    const [totalAmount,setTotalAmount]=useState(0)
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])



    return(
        <div className='flex flex-row justify-center gap-28'>
            <div className=' rounded-xl' >
                {cart.length>0 ?
                (<div>
                {
                    cart.map((item,index)=>(
                        <CartItem key={item.id} item={item} itemIndex={index}/>
                    ))
                }
                </div>) 
                :
                (<div>
                    <h1>Cart is Empty</h1>
                    <NavLink to="/">
                        <button className=' bg-blue-600 p-2 mt-4 rounded-lg font-semibold'>
                            Shop Now
                        </button>
                    </NavLink>
                    
                </div>)
                }
            </div>
            
            <div className='border-4 border-blue-600 w-64 mt-4 h-44'>
                <div>
                    <h1 className='text-3xl font-bold pt-4'>Your Cart</h1>
                </div>
                <br />
                <div>
                    <h1 className='text-2xl font-semibold'>Total Items: {cart.length}</h1>
                </div>
                <br />
                <div className=''>
                    <h1 className='text-xl font-semibold'>Total Cost: $ {totalAmount} </h1>
                </div>
            </div>

        </div>
    )
}

export default Cart;