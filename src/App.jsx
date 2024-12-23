import React, { useState } from 'react'
import "./App.css"
import InputTodo from './components/InputTodo'
import Output from './components/Output';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='w-full h-full'>
      <h1 className="app-heading  text-center text-5xl my-8 mr-10 font-bold underline">MAKE YOUR TODO</h1>
    <div className="main-container">

      <div className="center-container">
        <InputTodo addList={addList}/>
    
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Output key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default App
