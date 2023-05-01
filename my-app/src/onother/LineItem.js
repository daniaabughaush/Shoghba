import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item,handelcheck,handelDelete}) => {
  return (
    <li className='item' >
          <input type="checkbox" checked={item.checked}
          onChange={()=>handelcheck(item.id)}
          />
          <label
          style={(item.checked)? {textDecoration:'line-through'}:null} 
          onDoubleClick={()=>handelcheck(item.id)} >{item.item}</label>
          <FaTrashAlt role="button" tabIndex="0"
          onClick={()=>handelDelete(item.id) }
        aria-label={`Delete ${item.item}`}
       
        />
        </li>
  )
}


export default LineItem