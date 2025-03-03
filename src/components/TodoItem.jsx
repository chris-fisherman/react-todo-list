import React from 'react';

const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <li>
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
      <button className='list__delete-btn' onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
