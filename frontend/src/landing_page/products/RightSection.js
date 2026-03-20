import React from 'react';

function RightSection({
    productName,
    productDescription,
    learnMore,
    imageURL
    
    }) {
    return ( 

<div className='container'>
     <div className='row'>
        <div className='col-1'></div>
        <div className='col-5 p-5 ' style={{marginTop:"10%"}} >
            <h1>{productName}</h1>
            <p>{productDescription}</p>
              <div>
                <a href={learnMore} style={{textDecoration:"none"}}>Learn more</a>
              </div>
        </div>
          <div className='col-6'>
            <img src={imageURL} />

          </div>
     </div>
 </div>

        );
}

export default RightSection;