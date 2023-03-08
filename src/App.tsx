import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';

const App: FC = () => {

  // App states
  const [task, setTask] = useState<string> ("")
  const [deadline, setDeadline] = useState<number> (0)
  const [todo, setTodoList] = useState ([])

  // functions
  const handleTaskChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTask (e.target.value)
  }

  const handleDeadlineChange = (e:ChangeEvent<HTMLInputElement>) => {
    const deadline:number = Number (e.target.value)

    setDeadline(deadline); 
  }

  return (
    <div className="App">
      <div className = "header">
        <div className='inputContainer'>
          <input onChange={handleTaskChange} name = "task" type ="text" placeholder="Task..." />
          <input onChange={handleDeadlineChange} name = "deadline" type ="number" placeholder="Expires in ... days" />
        </div>
        <button> AddTask </button>  
      </div>

      <div className="todoList">

      </div>
    </div>
  );
}

export default App;
