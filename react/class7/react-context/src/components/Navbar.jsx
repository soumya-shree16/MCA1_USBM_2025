import React from 'react'
import ThemeContext from '../../context/ThemeContext'
import {useContext} from 'react'

const Navbar = () => {
  const {theme} =useContext(ThemeContext);
  return (
    <div>
    <div className={`${theme==="light"? "bg-white text-black" : "bg-black text-white"}`}>
      <ul className='flex justify-around bg-black  text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar