import './TodoItem.css';
const TodoItem = (props) => {
    return (
        <li className={`itemTodo ${props.completed && "completed"}`}>
            <span	onClick={props.onComplete}>{props.text}</span>
            <button onClick={props.onDelete} className="btnDel">Eliminar</button>
        </li>
    );
};  

export {
    TodoItem
};
