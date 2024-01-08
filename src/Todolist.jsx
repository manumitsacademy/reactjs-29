import React from 'react';
import Todo from './Todo';
function Todolist() {
    let [todos,setTodos] = React.useState(['Ram','Pranay Anna','Varma','Anitha Akka','sanju'])
  return (
    <ul>
        {
            todos.map((task)=>{
                return(
                    <Todo task={task}></Todo>
                )
            })
        }
    </ul>
  )
}

export default Todolist

