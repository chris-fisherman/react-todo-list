import React, { useEffect, useState } from 'react';
import NewItemForm from './components/NewItemForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('Items');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(todos));
  }, [todos]);

  function addItem(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewItemForm onSubmit={addItem} />

      <h1 className='header'>To-do list</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
