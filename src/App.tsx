import React, {FC, useState, ChangeEvent, MouseEvent} from 'react';
import './App.css';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';

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

    // new Task object 
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
      isDone: false  
    } 
    setTodoList([...todoList, newTask ]) 

    // reste inputs
    resetInputs()
  }


  const completeTask = (taskToDelete: ITask) : void => {

    // filtering through all todos in the list
    setTodoList(todoList.filter((task)=>{
      return task != taskToDelete;
    }))
  }

  const resetInputs = () => {

    // input values depend on state values (in html)
    setDeadline(0);
    setTask(""); 
  }

  return ( 
    <div className="App">
      <div className = "header">
        <div className='inputContainer'>
          <input onChange={handleTaskChange} value={task} name = "task" type ="text" placeholder="Task..." />
          <input onChange={handleDeadlineChange} value={deadline} name = "deadline" type ="number" placeholder="Expires in ... days" />
        </div>
        <button onClick={handleTaskSubmit} name="taskSubmitBtn"> AddTask </button>  
      </div>

      <div className="todoList">
        {todoList.map ((task: ITask, key: number)=>{
          return <TodoTask key={key} task = {task} completeTask={completeTask}/> })}
      </div>
    </div>
  );
}

export default App;
