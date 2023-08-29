import { FaCheck, FaCircleXmark } from "react-icons/fa6";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
        <FaCheck 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}/>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
        <FaCircleXmark className="Icon Icon-delete"
      onClick={props.onDelete}/>
    </li>
  );
}
export { TodoItem };
