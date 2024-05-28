import "./task.css";
import React from "react";

interface Props {
    text: string,
    onDeleteMe: () => void
}

const Task: React.FC<Props> = ({text, onDeleteMe}) => {
    return (
        <div className="task">
            <p>{text}</p>
            <div className="btn-group">
                <input type="checkbox"/>
                <button onClick={onDeleteMe}>Delete</button>
            </div>
        </div>
    );
};

export default Task;