import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            
            <div className= 'p-5' id='supportWrapper'>
               <h1 className='fs-5 ' >Support Portal </h1>
               <a href=''>Track Tickets</a> 
            </div>
            <div className='row  m-3' >
                <div className='col-1'></div>
               <div className='col-5  p-3 '>
                <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket </h1>
                <input placeholder='Eg. how do I activate F&O ' className='mb-3' /> <br></br>

               <a href='' style={{marginLeft:"2px"}} >Track account opening</a> 
                <a href='' style={{marginLeft:"15px"}}>Track segment activation</a> 
                <a href='' style={{marginLeft:"15px"}}>Intraday </a> 
                <a href='' style={{marginLeft:"15px"}}>Kite user manual</a> 

            </div> 
            <div className='col-1'></div>
            <div className='col-5  p-3 ' >

                <h1 className='fs-4 mb-3'>Featured</h1>
                <ol>
                    <li>
                    <a href='' style={{lineHeight:"2.5rem"}}> Current Takeovers and Delisting - January 2025 </a> 

                    </li>
                    <li> <a href='' style={{lineHeight:"2.5rem"}}> Latest Intraday leverages - MIS & CO</a> 
                    </li>
                </ol>

            </div>
            </div>
            <div className='row mt-5'></div>
        </section>
     );
}

export default Hero;