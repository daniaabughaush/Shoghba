import React from 'react'
import { useState } from "react";
import "../App.css";

const ShowProduct = ({setStores,items}) => {
    const showItems=items;
    const deleveryFee="1 jd"
    const storeName="محل مياه"
    // console.log(showItems[1].id);
    const [style, setStyle] = useState("prodFlex");
    
    const changeStyle = () => {
      console.log("you just clicked");
    
      setStyle("prodFlexClick");
    };
  return (
    

        <div>

       {
        showItems.map((item) =>
        <div className={style} onClick={changeStyle}>
            <div>
            <p>{item.name}</p>
            <p>{item.descreption}</p>
            <p>{item.type}</p>
            <p>{deleveryFee}</p>
                </div>
            <img className='prodImg ' src={item.imgSrc} alt="" srcset="" />
            </div>
        )
       } 
        </div>
    
  )
}

export default ShowProduct