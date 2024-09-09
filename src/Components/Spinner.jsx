import React from 'react';
import './Spinner.css'

function Spinner(){

    return(
        <div className='flex justify-center align-middle'> 
        <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
        </div>
    </div>
    )
}

export default Spinner;