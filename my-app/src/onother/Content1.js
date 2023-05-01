import React from 'react';
import { useState } from 'react';

const Content = () => {
  const [name,setName]=useState('dania');
  const[count,setCount]=useState(0)
    const handelNameChange=()=>{
        const name=['dania','asshar','asma','khawla']
        const index=Math.floor(Math.random()*4)
        setName (name[index])
      }
      const handelClick=()=>{
       setCount(count+1)
            console.log(count)
       
          }
      const handelClick1=(name)=>{
   console.log(`${name} was clicked`)
      }
      const handelClick3=(e)=>{
      
            console.log(e)
            console.log(e.target)
            console.log(e.target.innerText)
        
      }
      
  return (
    <main>
        <p onDoubleClick={()=>handelClick1('dave')}>hello {name}</p>
        <button onClick={handelNameChange}>change my name</button>
        {/* <button onClick={()=>handelClick1('dave')}>click me</button> */}
        <button onClick={handelClick}>count</button>
        <button onClick={(e)=>handelClick3(e)}>click me</button>
    </main>
  )
};

export default Content;
