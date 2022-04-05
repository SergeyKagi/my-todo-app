import React, { Component } from 'react';

import TodoList from '../TodoList/';
import AppHeader from '../AppHeader';
import SearchTodoItems from '../SearchTodoItems';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffe!', important: false, id: 1 },
      { label: 'Make awsome React - App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, indx),
        ...todoData.slice(indx + 1),
      ];
      return { todoData: newArray };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchTodoItems />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDel={this.deleteItem} />
      </div>
    );
  }
}
