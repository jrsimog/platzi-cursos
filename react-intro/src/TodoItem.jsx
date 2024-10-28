import './TodoItem.css';
const TodoItem = (props) => {
    console.log(props);
    return (
        <li className={`itemTodo ${props.completed && "completed"}`}>
            <span>{props.text}</span>
            <button className="btnDel">Eliminar</button>
        </li>
    );
};  

export {
    TodoItem
};