import React,{useState} from "react";

function InputTodo(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="justify-center  max-h-80 items-center">
    <div className="input-container  flex justify-center items-center mt-40 h-10 text-3xl border-spacing-2 border-solid  shadow-2xl" >
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn justify-center ml-8 w-10 bg-blue-600 rounded-3xl text-3xl text-zinc-50 font-bold" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
    </div>
  );
}

export default InputTodo;