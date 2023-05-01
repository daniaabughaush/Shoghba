import React from 'react'

const Hero = () => {
  <link rel="stylesheet" type="text/css" href="https://www.fontstatic.com/f=hanimation" />
  return (

    <section className="hero">

    <div className="header">

<div className="inner-header flex heroFirst">
<h1 className="slong">موقع جُــغبـة لتوصيل جميع انواع المياه </h1>

<form action="" className='heroForm'>
    <input className="firstInput"type="submit" value="اختر موقعك وتابع" />
    <input className="lastInput" type="text" placeholder="اختر موقع التوصيل" />
</form>
<div className='secondSlong'>

<h4> من مين, من مين , من مين؟!! احنا حارة السقايين</h4>
<h5>جميع انواع المياه , شرب ,مياه مسابح,مياه للزراعة, تعبئه خزانات المياه , كلو واصل لعندك,</h5>

</div>
</div>


<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>


</div>


    </section>
  )
}

export default Hero;