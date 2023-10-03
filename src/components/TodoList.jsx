import React, { useState } from "react";
import UpdateItem from "./UpdateItem";
const TodoList = (Props) => {

  return (
    <div className="m-5">
      <div className="bg-slate-800 w-80 px-10 py-10  text-white">
      <h1 className="mb-6 text-start">{ Props.text}</h1>
      <UpdateItem />

       
        
        <button
          className="bg-blue-800 rounded-lg py-2 px-5 w-full"
          onClick={() => {
            Props.onSelect(Props.id);
          }}
        >Remove
        </button>
      </div>
    </div>
  );
};
export default TodoList;
