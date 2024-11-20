import './TodoItem.css';
import { FcDeleteDatabase } from "react-icons/fc";
const TodoItem = (props) => {
    return (
        <li className={`itemTodo ${props.completed && "completed"}`}>
            <span	onClick={props.onComplete}>{props.text}</span>
            <button onClick={props.onDelete} className="btnDel">
							<FcDeleteDatabase />
						</button>
        </li>
    );
};  

export {
    TodoItem
};
