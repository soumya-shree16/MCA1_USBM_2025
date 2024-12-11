import {createContext} from "react";
import {useState} from 'react';


const ThemeContext=createContext();

export const ThemeProvider =({children})=>{

const[theme,setTheme] =useState("dark");

const toggleTheme=()=>{
    setTheme((prev)=>(prev==="light" ? "dark" : "light"));
};

return(
    <ThemeContext.Provider 
    value=
    {{theme,
    toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)

};

export default ThemeContext;