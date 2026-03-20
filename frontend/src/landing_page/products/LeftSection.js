import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
    }) {
    return ( 
    <div className='container'>
         <div className='row p-4 '>
             <div className='col-6 p-5'>
                    <img src={imageURL } />
                        
             </div>
            <div className='col-5 p-5 mt-5'>
                 <div>
                   <h1>{productName}</h1>
                   <p>{productDescription}</p>
                   <a href={tryDemo} style={{textDecoration:"none"}}>Try demo         
                         < i class="fa fa-arrow-right p-1" aria-hidden="true"></i> 
                    </a>
                   <a href={learnMore}  
                      style={{marginLeft:"50px",textDecoration:"none"}}>Learn more
                      < i class="fa fa-arrow-right p-1" aria-hidden="true"></i> 
                    </a>
                 </div>
                 <div className='mt-3'>
                   <a href={googlePlay}>
                    <img src='media/images/googlePlayBadge.svg' />
                   </a>
                   <a href={appStore}> 
                    <img src='media/images/appstoreBadge.svg' 
                    style={{marginLeft:"50px"}}/>
                   </a>
                 </div>

             </div>  
             <div className='col-1'></div>                               
         </div>
    </div>
   );
}

export default LeftSection;