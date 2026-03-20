import React from 'react';

function Hero() {
    return (

<div className='container mt-5'>
     
     <div className='row p-5  text-center'>
       <h2>Pricing </h2>
       <h4 className='fs-5 mt-3 text-muted' >Free equity investments and flat ₹20 traday and F&O charges </h4>
     </div>

    <div className='row p-5 mt-5 text-center border-top ' >
      <div className='col-4 p-5'>
         <img src='media/images/pricingEquity.svg' />
         <h1 className='fs-3 p-3'>Free equity delivery</h1>
         <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className='col-4 p-5'>
        <img src='media/images/intradayTrades.svg ' />
         <h1 className='fs-3 p-3'>Intraday and F&O trades</h1>
         <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className='col-4 p-5'>
         <img src='media/images/pricingEquity.svg' />
         <h1 className='fs-3 p-3'>Free direct MF</h1>
         <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>

    </div>
</div>
      );
}

export default Hero;