import { FaCirclePlus } from "react-icons/fa6";

import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" 
    onClick={
      () => alert('Click')
    }>
      <FaCirclePlus />
    </button>
  );
}

export { CreateTodoButton };