import React from 'react';
import { useState } from 'react';

import ItemList from '../ItemList';
const Content = ({handelcheck,handelDelete,items}) => {
 
  return (
    <main>
      {items.length?(

     <ItemList 
     items={items}
     handelDelete={handelDelete}
     handelcheck={handelcheck}
     />
     ):<h3>empty</h3>
    }
    </main>
  )
};

export default Content;