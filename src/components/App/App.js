import React from 'react';

import TodoList from '../TodoList/';
import AppHeader from '../AppHeader';
import SearchTodoItems from '../SearchTodoItems';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

const App = () => {
  const isLoggedIn = 0;
  const loginBox = <span>Loggin please</span>;
  const welcomeMessg = <span>Welcome Back</span>;

  const todoData = [
    { label: 'Drink Coffe!', important: false, id: 1 },
    { label: 'Make awsome React - App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      {isLoggedIn ? welcomeMessg : loginBox}
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchTodoItems />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
