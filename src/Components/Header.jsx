import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Slices/CartSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Header(){

    const {cart}=useSelector((state)=>state)
    const Dis=useDispatch()

    useEffect(() => {
        const prodis = JSON.parse(localStorage.getItem("prdts"));
    
        if (prodis && prodis.length > 0) {
          prodis.map((proj)=>{
            if(cart.some((p)=>p.id===proj.id)){}
            else{
                Dis(add(proj))
            }
          })
        }
      }, []);
    
    
      useEffect(()=>{
        localStorage.setItem("prdts",JSON.stringify(cart))
      },[cart])

    return(
        <div className='bg-pink-400 rounded-lg ' >
            <div className='flex flex-row justify-between'>
                <NavLink to="/">
                    <img  className="w-[100px] pl-3 py-1" src="https://static.vecteezy.com/system/resources/previews/014/890/010/non_2x/shopping-cart-logo-design-shopping-logo-design-on-line-shopping-app-icon-vector.jpg" alt="" />
                </NavLink>
                <div className='pr-4'>
                    <NavLink to="/">
                        <h2 className='font-semibold mt-2 text-xl  bg-orange-600 rounded-lg px-[10px]'>Home</h2>
                    </NavLink>
                    <NavLink to="/cart">
                        <h2 className='mt-4 font-semibold text-xl  bg-orange-600 rounded-lg'>Cart</h2>
                    </NavLink>
                </div>
            </div>
        </div>
    )

}
export default Header;