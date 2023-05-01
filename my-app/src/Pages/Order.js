import React from 'react';
import placeHolder from "../images/placeholderPic.jpg"

const Order = () => {
    const order= {store:"شركة الجوهرة للمياه المعدنية ",
     type:"طرد مياه كبير",
     count :"2طرد",
     price:"4",
     deleveryFee:"1",
     imgSrc:"imgSrcPlaceHolde"}
  return (
    <div>

<div className='orderDetails'>

  
<div className='details'>
<p>اسم المتجر:{order.store}</p>
<p>الطلب:{order.type}</p>
<p>الكمية:{order.count}</p>
<p>السعر:{order.price}دينار أردني</p>
<p>رسوم التوصيل:{order.deleveryFee}دينار أردني</p>

</div>
<div className='imgOrder'>
    <img src={placeHolder}/>
    </div>
</div>
    </div>
  )
}

export default Order