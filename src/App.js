import React,{useState,useReducer} from "react";
import "./style.css";
import Modal from './modal';
import {data} from './data';

export default function App() {

  const reducer =(state,action)=>{

  }
  const defaultState = {
     people:[],
    
    isModalopen:false,
    modalContent:"hello world",
  }
  
  const [name, setName] = useState("");
  const [state,dispatch] = useReducer(reducer,defaultState);
  console.log(state);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
      dispatch({type:TEST})
    }else{
      
    }
  }
  return (
    <>
   
    {state.isModalopen && <Modal modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div> 
      <div className ="form-group">
        <button className='btn'>Add Item</button>
      </div> 
    </form>
        <div>
          {state.people.map((item)=>{
            return(
              <div key={item.id}>
                <h2>{item.name}</h2>
              </div>
            )
          })}
        </div>
    </>
  );
}
