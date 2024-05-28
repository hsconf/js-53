import './addTask.css';
import './task';
import React from "react";

interface Props {
    onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    OnClickMe: () => void,
    inputValue: string
}

const AddTask: React.FC<Props> = ({OnClickMe, onHandleChange, inputValue}) => {

    return (
        <div className="input">
            <input type="text" placeholder="Add new task" onChange={onHandleChange} value={inputValue} required/>
            <button onClick={OnClickMe}>Add</button>
        </div>
    );
};

export default AddTask;