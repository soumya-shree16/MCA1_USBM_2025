import React from 'react'
import ThemeContext from '../../context/ThemeContext'
import {useContext} from 'react'

const Context = () => {

    const{theme} = useContext(ThemeContext);
  return (
    <div className={` w-screen h-screen ${theme==="light"? "bg-white text-black" : "bg-black text-white"}`}>
    <div className={`${theme==="light"? "bg-white text-black" : "bg-black text-white"}`}>
    now we use our theme <span>{theme}</span></div>
    </div>
  )
}

export default Context;