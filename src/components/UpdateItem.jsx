import React, { useState } from "react";
const UpdateItem = (() => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Edit your Todos");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return(
    <>
    <div>
      {isEditing?(
        <div>
           <input className="bg-transparent outline-none m-5 p-1"
            type="text"
            value={text}
            onChange={handleInputChange}
          />
          <button className="bg-blue-800 rounded-lg py-2 px-5 w-full mb-4 " onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{text}</h1>
          <button className="bg-blue-800 rounded-lg py-2 px-5 w-full mb-4 " onClick={handleEditClick}>Update Status
          </button>
        </div>
      )}
      
    </div>
    
    </>
  )  
})

export default UpdateItem;


