
import { useState, useEffect } from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";


const PartnerProduct = ({setStores,items}) => {
    const API_URL = 'http://localhost:3500/items';
function handelDelete(id){
    alert(id)
}


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
                {item.id}
            <p>{item.name}</p>
            <p>{item.descreption}</p>
            <p>{item.type}</p>
            <p>{deleveryFee}</p>
                            </div>
            <img className='prodImg ' src={item.imgSrc} alt="" srcset="" />
           <RiDeleteBin6Line className="deleteButton"  onClick={()=>handelDelete(item.id)} />
            </div>
        )
       } 
        </div>
    
  )
}

export default PartnerProduct