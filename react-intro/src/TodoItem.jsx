import './TodoItem.css';
import { DeleteIcon } from './DeleteIcon';
import { CompleteIcon } from './CompleteIcon';


const TodoItem = (props) => {
    return (
        <li className="TodoItem">
			<CompleteIcon />
			<p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
			<DeleteIcon />
        </li>
    );
};  

export {
    TodoItem
};
