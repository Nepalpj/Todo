import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../../feature/todoSlice";

const AddTodo = () => {
    const [input , setInput] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e : any)=>{
            e.preventDefault()
            dispatch(addTodo(input))
            setInput("")
    }
  return (
    <div>
        <form action="form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="enter your todo"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onSubmit={handleSubmit}>add todo</button>
        </form>

    
    </div>
  )
}

export default AddTodo