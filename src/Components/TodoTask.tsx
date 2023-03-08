import React from "react";
import { ITask } from "../Interfaces";
import { JsxElement } from "typescript";

const TodoTask = (props:ITask) => { 
    return <div> {props.taskName} {props.deadline} </div> 
};

export default TodoTask; 