import React from 'react';

const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <li className='todo-item'>
      <label htmlFor='check'>
        <input
          type='checkbox'
          name='check'
          id='check'
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className='todo-item__delete-btn' onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
