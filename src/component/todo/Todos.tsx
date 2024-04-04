import { useSelector } from "react-redux"
import React from "react"


const Todos: React.FC = () => {

    const todoos = useSelector((state : any)=> state.todos.items)
  return (
    <div>{todoos.map((todo:any) => (
        <>
        <span>{todo.text}</span>
        </>
        
        ))}</div>
  )
}

export default Todos