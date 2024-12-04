import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import ThemeContext from '../../context/ThemeContext';
import {useContext} from 'react'

const ThemeButton = () => {

    const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <div className='text-5xl'>
        <button onClick={toggleTheme}>
           {theme ==="light"? <MdDarkMode/> : <CiDark/> }
            </button>
    </div>
  )
}

export default ThemeButton;