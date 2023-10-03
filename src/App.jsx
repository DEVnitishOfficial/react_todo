import { useState } from "react"
import TodoList from "./components/todoList"


function App() {
  const [inputValue, setInputValue] = useState("add ToDo list")
  const [item, setItems] = useState([])

  const itemEvent = (event) => {
    setInputValue(event.target.value);
  }

  const listOfItems = () => {
       setItems((oldItems) => {
        return [...oldItems, inputValue]
       })
       setInputValue(" ")
  }

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }



return (
 <>
  <div className="bg-white p-10 m-20 rounded-md flex justify-center lg:space-x-96 md:space-x-32 sm:space-x-32 ">
    <input className="p-1 border-2 rounded-md border-blue-500 outline-none"
     type="text"
     placeholder="Learn useRef"
     value={inputValue}
     onChange={itemEvent} 
      />
    <button className="bg-[#5b3271] pt-3 pb-3 pl-10 pr-10 rounded-lg text-white"
    onClick={listOfItems}>Add</button>
    </div>

      <div className="flex flex-wrap items-center justify-center">   
    {item.map((itemVal,index) => {
        return <TodoList
         key={index} 
         id={index} 
         text={itemVal}
         onSelect={deleteItems}
         />
         })}
         </div>
  </>
)
}
export default App
