import React from 'react';
import  { TodoCounter } from './TodoCounter';
import  { TodoSearch } from './TodoSearch';
import  { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const todosTest = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curs de intro a React', completed: false},
  {text: 'Cortarebolla', completed: true},
  {text: 'Tomar l curso de intro aReact', completed: false},
  {text: 'Cortar cebol', completed: true},
  {text: 'Tomar el cso de intro a React', completed: false},
  {text: 'Cortar ebolla', completed: true},
  {text: 'Tomar el cuo de intro a React', completed: false},
]



function App() {
  const [todos, setTodos] = React.useState(todosTest);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    // !! si es diferente de 0, es true
    todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const textTodo = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return textTodo.includes(searchText)  ;
  });

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
