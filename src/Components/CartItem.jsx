import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';

export default function CartItem({item}){
    
    const Dispatch=useDispatch()

    function rfc(){
        Dispatch(remove(item.id))
        toast.success("Item Removed From Cart")

    }
    

    return(
        <div className='border-blue-700 border-4 p-4 m-4 rounded-md w-[25rem]'>
            <div><Toaster/></div>
            <div className='flex justify-center'>
                <img className='w-[100px] m-2' src={item.image}/>
            </div>
            <div className='text-3xl font-semibold p-2'>
                <p>{item.title}</p>
            </div>
            <div>
                <h1>{item.description}</h1>
            </div>
            <div>
            <h2 className='text-xl font-semibold p-3'>Price: $ {item.price}</h2>
            </div>
            <div>
                <button onClick={rfc} className='bg-blue-500 p-2 rounded-lg font-semibold'>
                    Remove
                </button>
            </div>
        </div>
    )
}
