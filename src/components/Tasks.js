import { useState } from "react";

const Tasks = () =>{
  const [tasks, setTasks ] = useState([{id: 1, text: 'update t-shirt count', pending: true}, {id: 2, text: 'price new shoes order', pending: true}, {id: 3, text: 'clean stock room', pending: true}])

  const renderedTasks = tasks.map(task =>{
    return (
      <div key={task.id} className={ !task.pending ? 'input-wrapper completed': 'input-wrapper'}>
        <input defaultValue={task.text} type="text" className={!task.pending ? 'completed': null} disabled/>
        <i className="far fa-edit"></i>
        <i className="far fa-trash-alt"></i>
      </div>
    )
  })
  return(
    <div className="message-board z-depth-3">
      <h4>Message Board</h4>
      <div className="task-container">
        {renderedTasks}
        
      </div>
      
      <input className="input-field" type="text" placeholder="Add a task"/>
    </div>
  )
}

export default Tasks;