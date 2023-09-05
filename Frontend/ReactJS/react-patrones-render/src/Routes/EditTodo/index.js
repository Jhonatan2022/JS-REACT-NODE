import React from 'react'; 
import { TodoForm } from '../../ui/TodoForm'; 
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodo() {
    const location = useLocation();

    const params = useParams();
    const id = Number(params.id);
    
    const { state, stateUpdaters } = useTodos();
    const { loading, findTodo } = state;
    const { editTodo } = stateUpdaters;

    let todoText;

    if(location.state?.todo){
        todoText = location.state.todo.text;
    }else if (loading) {
        return 'Cargando...';
    } else {
        const todo = findTodo(id);
        todoText = todo.text;        
    }
    return (
            <React.Fragment>
                <TodoForm 
                    label="Editar Todo"
                    submitText="Editar"
                    textValueEdit={todoText}
                    submitEvent={(newText) => editTodo(id, newText)}/>
            </React.Fragment>
        );
}

export { EditTodo };
