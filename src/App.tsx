import './App.css';
import AddTask from "./components/todo-list/addTask";
import Task from "./components/todo-list/task";
import React, {useState, ChangeEvent} from "react";

const App = () => {
    const [allTasks, setAllTasks] = useState([
        {value: 'text', id: 1425},
        {value: 'text', id: 1275},
        {value: 'text', id: 125}
    ]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const sayHello = () => {
        const tasks = [...allTasks, {value: inputValue, id: Math.floor(Math.random() * 1000)}];
        setAllTasks(tasks);
        setInputValue('');
    };

    const deleteTasks = (id: number) => {
        const updatedTasks = allTasks.filter(task => task.id !== id);
        setAllTasks(updatedTasks);
    };

    return (
        <>
            <AddTask OnClickMe={sayHello} onHandleChange={handleChange} inputValue={inputValue} />
            {allTasks.map((task) => (
                <Task text={task.value} key={task.id} onDeleteMe={() => deleteTasks(task.id)} />
            ))}
        </>
    );
};

export default App;
