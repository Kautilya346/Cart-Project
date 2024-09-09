import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { add,remove } from '../Redux/Slices/CartSlice';


function Product({prod}){

    const {cart}=useSelector((state)=>state)
    const Dispatch=useDispatch()

    function addToCart(){
        Dispatch(add(prod))
        toast.success("Item Added to Cart")
    }

    function removeFromCart(){
        Dispatch(remove(prod.id))
        toast.success("Item Removed From Cart")
    }

    
    return(
        

        <div className='border-red-700 border-4 p-4 m-4 hover:shadow-lg hover:shadow-red-600 hover:scale-[1.03] rounded-md hover:transform hover:transition hover:duration-[400ms]' >
            <div><Toaster/></div>
            <div>
                <h1 className='text-3xl font-semibold p-2'>{prod.title}</h1>
            </div>
            <div>
                <p className='pb-2'>{prod.description}</p>
            </div>
            <div className='w-full flex justify-center'>
                <img className='w-[100px] m-2' src={prod.image}/>
            </div>
            <div>
                <h2 className='text-xl font-semibold p-3'>Price: $ {prod.price}</h2>
            </div>

            {
                cart.some((p)=>p.id==prod.id) ?
                (<button onClick={removeFromCart} className='border-red-600 border-4 rounded-lg font-semibold p-2 w-48'>
                    Remove From Cart
                </button>)
                :
                (<button onClick={addToCart} className='border-red-600 border-4 bg-red-500 rounded-lg font-semibold p-2 w-48'>
                    Add To Cart
                </button>)
            }

        </div>
    )
}

export default Product