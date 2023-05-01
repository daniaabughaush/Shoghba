import React from 'react'

const AdressDetails = () => {
    const order= {city:"الزرقاء",
    street:"السعادة",
    building :"2",
    floar:"4",
    adressLine:"الزرقاء, مقابل بناية التأمين الصحي, طابق 4, شارع 13",
    phone:"077956256532"}
 return (
   <div>
<div className='orderDetails'>
 
<div className='details'>
<p>معلومات التوصيل</p>
<p>المدينة:{order.city}</p>
<p>الشارع:{order.street}</p>
<p>البناية:{order.building}</p>
<p>الطابق:{order.floar} </p>
<p> العنوان بالتفصيل:{order.adressLine} </p>
<p>رقم هاتف  للتواصل:{order.phone} </p>

</div>

</div>
   </div>
 );
}

export default AdressDetails