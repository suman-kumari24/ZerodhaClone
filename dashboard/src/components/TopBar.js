import React, {useState} from 'react';

import Menu from './Menu';

const TopBar =()=>{
  
  const menuClass ="menu";
  const activeMenuClass = "menu selected";
    return (  
    <div className='topbar-container'>
        <div className=' indices-container'>
            <div className='  nifty'>
              <p className='index'>NIFTY 50</p>
              <p className='index-points'> {100.2}</p>
              <p className='percent'></p>

            </div>
            <div className='sensex'>
            <p className='index'>SENSEX </p>
              <p className='index-points'> {100.2}</p>
              <p className='percent'></p>

            </div>


        </div>
    <Menu/>
    </div>
    );
}

export default TopBar;