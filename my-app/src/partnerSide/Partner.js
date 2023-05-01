import React from 'react'
import AddPartner from './AddPartner'
import { useState, useEffect } from 'react';

const Partner = ({
 items,setStores

}) => {
  

  

  // const showItems=items;
  
  const[productName,setProductName]=useState("");
 const[descreption,setDescreption]=useState("");
 const[imageUrl,setImageUrl]=useState("");
 const[price,setPrice]=useState("");
 const[type,setType]=useState("");
 const [newItem, setNewItem] = useState('');

//  const addItem = async (item) => {
//   const id = items.length ? items[items.length - 1].id + 1 : 1;
//   const myNewItem = { id, checked: false,name:productName,descreption:descreption,imgSrc:imageUrl,type:type  };
//   const listItems = [...items, myNewItem];
//   setStores(listItems);

//   const postOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(myNewItem)
//   }
//   const result = await apiRequest(API_URL, postOptions);
//   if (result) setFetchError(result);
// }
// const handelSubmit = (e) => {
//   e.preventDefault();
//   if (!newItem) return;
//   addItem(newItem);
  // setNewItem('');
// }
  // console.log(showItems);
  function handelSubmit()
{
  let data={productName,descreption,imageUrl,price,type}

  fetch("http://localhost:3500/items", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}

  return (
    <div>
      <AddPartner

      productName={productName}
      descreption={descreption}
      imageUrl={imageUrl}
      price={price}
      setProductName={setProductName}   
      setDescreption={setDescreption}
      setImageUrl={setImageUrl}
      setPrice={setPrice}
      handelSubmit={handelSubmit}
      setStores={setStores}
items={items}   
type={type}
setType={setType}
newItem={newItem}
setNewItem={setNewItem}
 />  


    </div>
  )
}

export default Partner