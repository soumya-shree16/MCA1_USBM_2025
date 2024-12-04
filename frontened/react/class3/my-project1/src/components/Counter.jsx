import  { useState } from 'react'

const Counter = () => {
 
    const[counter,setCounter]=useState(0)

    
    const increment = () => {
       
        setCounter((prev) => prev+1);
       //console.log(Counter);
       
    };

    const decrement = () =>{
        setCounter((prev) =>prev-1);
    }
 
   
  return (
     <div>
        <h2> Count:{counter}</h2>
        <button onClick={increment} 
        className='bg-slate-300 border-lime-100 '>
            increment
            </button>
            <button onClick={decrement} 
        className='bg-slate-300 border-lime-100 '>
             decrement
            </button>
     </div>
  )
}



export default Counter;