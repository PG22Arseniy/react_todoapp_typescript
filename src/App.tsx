import React, {FC, useState, ChangeEvent, MouseEvent} from 'react';
import './App.css';
import { ITask } from './Interfaces';

const App: FC = () => {

  // App states
  const [task, setTask] = useState<string> ("")
  const [deadline, setDeadline] = useState<number> (0)
  const [todoList, setTodoList] = useState<ITask[]> ([])

  // functions
  const handleTaskChange = (e:ChangeEvent<HTMLInputElement>): void => {
    
    setTask (e.target.value)

  }

  const handleDeadlineChange = (e:ChangeEvent<HTMLInputElement>): void => {
   
    // convert input value to number
    const deadline:number = Number (e.target.value)

    setDeadline(deadline); 
  }

  const handleTaskSubmit = (e:MouseEvent<HTMLButtonElement>): void => {

    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
      isDone: false  
    } 
    setTodoList([...todoList, newTask ]) 
  }

  return (
    <div className="App">
      <div className = "header">
        <div className='inputContainer'>
          <input onChange={handleTaskChange} name = "task" type ="text" placeholder="Task..." />
          <input onChange={handleDeadlineChange} name = "deadline" type ="number" placeholder="Expires in ... days" />
        </div>
        <button onClick={handleTaskSubmit} name="taskSubmitBtn"> AddTask </button>  
      </div>

      <div className="todoList">

      </div>
    </div>
  );
}

export default App;
