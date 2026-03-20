import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5'>
               <h2 className='fs-3 '>The Zerodha Universe</h2>
                <p className='p-3 text-muted' >Extend your trading and investment experience even further with our partner platforms
                </p>
             <div className='col-3 p-4 mt-5' style={{marginLeft:"14%"}} >
                <img src="media/images/zerodhaFundhouse.png" style={{width:"170px"}} />
                <p className='text-small text-muted mt-3 mb-5'>
                Our asset management venture
                that is creating simple and transparent index
                funds to help you save for your goals.

                </p>
                <img src="media/images/streakLogo.png" style={{width:"170px"}} />
                <p className='text-small text-muted mt-3 mb-5'>
                Systematic trading platform
                that allows you to create and backtest
                strategies without coding.
                </p>
              </div>
              
            <div className='col-3 p-4 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{width:"170px",marginTop:"5px"}} />
                <p className='text-small text-muted mt-3 mb-5'>
                Options trading platform that lets you
                create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                </p>
                <img src="media/images/smallcaselogo.png"
                style={{width:"170px",marginTop:"15px"}} />
                <p className='text-small text-muted mt-3 mb-5'>
                Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.
                </p>
            </div>
            
            <div className='col-3 p-4 mt-5'>
                <img src="media/images/goldenpiLogo.png" 
                style={{width:"170px",marginTop:"8px"}} />
                <p className='text-small text-muted mt-3 mb-5'>
                Bonds trading platform
                </p>
                <img src="media/images/dittoLogo.png" 
                style={{width:"170px",marginTop:"65px"}}/>
                <p className='text-small text-muted mt-3 mb-5'>
                Personalized advice on life
                and health insurance. No spam
                and no mis-selling.
                </p>
                </div>
                <button className=' btn btn-primary fs-5 ' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>

                
            </div>
            
        </div>
        );
}

export default Universe;