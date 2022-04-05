import React from 'react';
import TodoListItems from '../TodoListItems';
import './TodoList.css';

const TodoList = ({ todos, onDel }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItems
          {...itemProps}
          onDeleted={() => {
            onDel(id);
          }}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
