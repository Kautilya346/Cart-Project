import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';


function Home(){

    const url="https://fakestoreapi.com/products"
    

    const [prods,setProds]=useState([])
    const [loading,setLoading]=useState(true)


    async function fetchProds(){

        setLoading(true)    
        const res= await fetch(url);
        const data=await res.json();
        setProds(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchProds();
    },[])


    return(
        <div>
            {loading ? <Spinner/> :
                prods.length > 0 ? 
                (<div>
                    {prods.map((prod)=>(
                        <Product key={prod.id} prod={prod}/>
                    ))}
                </div>)
                :
                (<div>
                    <h1>No Products Available</h1>
                </div>)
            }

        </div>
    )
}

export default Home;