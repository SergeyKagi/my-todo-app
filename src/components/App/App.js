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
    term: ' ',
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

  toggleUniverseFunc(arr, id, toggleProp) {
    const indx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[indx];
    const newItem = { ...oldItem, [toggleProp]: !oldItem[toggleProp] };
    return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleUniverseFunc(todoData, id, 'important') };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleUniverseFunc(todoData, id, 'done') };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { todoData, term } = this.state;

    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchTodoItems onSearchChange={this.onSearchChange} />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={visibleItems}
          onDel={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem addItemFunc={this.addItem} />
      </div>
    );
  }
}
