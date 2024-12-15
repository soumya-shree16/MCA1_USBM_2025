import React from 'react'

function Output(props) {
  return (
    <li className=" text-center pr-60 mt-7 text-2xl ">
        {props.item}
        <span className='icons '>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default Output