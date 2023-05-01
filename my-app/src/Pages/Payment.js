import React from 'react'
import Order from './Order';
import AdressDetails from './AdressDetails';
import ArriveTime from './ArriveTime';
import Pay from './Pay';

const Payment = () => {
  return (
    <div>

        <div id="background-wrap" style={{backgroundColor: "rgba(63, 186, 255,.1)"}}
        >
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
    </div>
        <div>
    </div>
    <div className='orderFlex'>

    <Order/>
    <AdressDetails/>
    <ArriveTime/>
    <Pay/>
    </div>

    </div>
  )
}

export default Payment