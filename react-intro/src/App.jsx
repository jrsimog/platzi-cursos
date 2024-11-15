import { useState } from 'react'
import './App.css'
import {TodoCounter} from './TodoCounter'
import { TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false}
];
  
function App() {

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


	const searchTodos = todos.filter(
		todo => {
			const text = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return text.includes(searchText);
		}
	);

	const completeTodo = (text) => {
		const paramText = text.toLowerCase();
		const todoIndex = todos.findIndex(todo => todo.text.toLowerCase() === paramText);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		setTodos(newTodos);
	}

	const deleteTodo = (text) => {
		const paramText = text.toLowerCase();
		const todoIndex = todos.findIndex(todo => todo.text.toLowerCase() === paramText);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	}

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
				setTodos={defaultTodos}
				todos={todos}
      />
      <TodoList >
        {searchTodos.map(todo => (
          <TodoItem
						key={todo.text} 
						text={todo.text} 
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
};

export default App;
