import React, { useState } from 'react';

const NewItemForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='new-item-form__input-container'>
        <label htmlFor='item'>New Item</label>
        <input
          type='text'
          name='item'
          id='item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className='new-item-form__btn'>Add</button>
    </form>
  );
};

export default NewItemForm;
