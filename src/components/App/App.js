import React, { Component } from 'react';

import TodoList from '../TodoList/';
import AppHeader from '../AppHeader';
import SearchTodoItems from '../SearchTodoItems';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';

import './App.css';

export default class App extends Component {
  maxId = 50;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffe!'),
      this.createTodoItem('Make awesome React - App'),
      this.createTodoItem('Have a lunch'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++,
    };
  }

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

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return { todoData: newArr };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[indx];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArray = [
        ...todoData.slice(0, indx),
        newItem,
        ...todoData.slice(indx + 1),
      ];

      return { todoData: newArray };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[indx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...todoData.slice(0, indx),
        newItem,
        ...todoData.slice(indx + 1),
      ];

      return { todoData: newArray };
    });
  };

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchTodoItems />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDel={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem addItemFunc={this.addItem} />
      </div>
    );
  }
}
