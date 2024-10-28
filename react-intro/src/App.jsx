import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoCounter} from './TodoCounter'
import { TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const todos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false}
];
  

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [defaultTodos, setdefaultTodos] = useState(todos);
  const completedTodos = defaultTodos.filter(todo => !!todo.completed).length;
  const totalTodos = defaultTodos.length;
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
				defaultTodos={defaultTodos}
				setdefaultTodos={setdefaultTodos}
      />
      <TodoList >
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
};

export default App;
