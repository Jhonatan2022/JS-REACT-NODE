import React from 'react'; 
import { TodoForm } from '../../ui/TodoForm'; 
import { useTodos } from '../useTodos';

function NewTodo() {
    const {stateUpdaters} = useTodos();
    const {addTodo} = stateUpdaters;
        
        return (
            <React.Fragment>
                <TodoForm 
                    label="Escribe tu nuevo Todo"
                    submitText="Añadir"
                    submitEvent={(text) => addTodo(text)}/>
            </React.Fragment>
        );
    }


export { NewTodo };
