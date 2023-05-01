import React from 'react';
import {FaPlus} from 'react-icons/fa'
import { useRef,useState } from 'react';
import PartnerProducts from './PartnerProducts'
const Add = ({items,productName,setProductName,descreption,setDescreption,imageUrl,setImageUrl,price,setPrice,handelSubmit,type,setType,newItem,setNewItem}
  ) => {
  const inputRef=useRef();
  
console.log(productName)
console.log(newItem)
  return (
    <div>
    <form className='addForm' onSubmit={handelSubmit}>
       <label htmlFor='addItem'>اضف منتجك </label> 
       <br></br>
       <input type="text" 
        autoFocus id='addItem'
        ref={inputRef}
      placeholder='اضف منتجك هنا'
      required 
      value={productName}
      onChange={(e)=>setProductName(e.target.value)}
     
       />
              <br></br>

       <input type="text" 
        autoFocus id='addItem'
        ref={inputRef}
      placeholder="اضف تفاصيل المنتج"
      required 
      value={descreption}
      onChange={(e)=>setDescreption(e.target.value)}
       />
       <br></br>

       <input type="text" 
        autoFocus id='addItem'
        ref={inputRef}
      placeholder="اضف صورة  المنتج"
      required 
      value={imageUrl}
      onChange={(e)=>setImageUrl(e.target.value)}
       />
              <br></br>

       <input type="number" 
        autoFocus id='addItem'
        ref={inputRef}
      placeholder=" سعر المنتج بالدينار الاردني"
      required 
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
       />
        <br></br>
       <input type="text" 
        autoFocus id='addItem'
        ref={inputRef}
      placeholder="نوع المنتج"
      required 
      value={type}
      onChange={(e)=>setType(e.target.value)}
       />
       
       <button type="submit" aria-label='Add Item'
       onClick={()=>inputRef.current.focus()}
       >
        <FaPlus/>
       </button>
       
    </form>
    <PartnerProducts 
    items={items}
    />
    </div>
  )
}

export default Add