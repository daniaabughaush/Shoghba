import React from 'react'

import LineItem from './LineItem';
const ItemList = ({handelcheck,handelDelete,items}) => {
  return (
   
        
     <ul>
      {items.map((item) =>(
          <LineItem
          key={item.id}
       item={item}
       handelcheck={handelcheck}
       handelDelete={handelDelete}
       />
      ))}
     </ul> 
   
  )
}

export default ItemList