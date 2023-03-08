import React from "react";
import { ITask } from "../Interfaces";


interface Props {
    task: ITask;
    completeTask(taskToDelete: ITask): void;
}

const TodoTask = ({task, completeTask}: Props) => { 
    return (
        <div className="task"> 

            <div className="content">

                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
        
                <button onClick={()=> {completeTask(task)}}> X  </button> 
            </div>

        </div> 
    );
};

export default TodoTask; 