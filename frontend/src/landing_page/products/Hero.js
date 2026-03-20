import React from 'react';

function Hero() {
    return ( 
        <div className='container  border-bottom mb-5'>
            <div className='text-center mt-5'>
            <h1>Zerodha Products</h1>
            <h5 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h5>
             <p className='text-muted mt-3 fs-7 mb-5 '>
                Check out our 
               <a href='' style={{textDecoration:"none"}}> investment offerings 
               < i class="fa fa-arrow-right p-1" aria-hidden="true"></i> 
               </a>
             </p>  
             </div>      
        </div>
     );
}

export default Hero;