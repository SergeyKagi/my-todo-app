import React, { Component } from 'react';
import react from 'react';
import './TodoListItems.css';

export default class TodoListItems extends Component {
  state = {
    done: false,
    important: false,
  };

  onClickLabel = () => {
    this.setState((state) => {
      return { done: !state.done };
    });
  };

  onClickButton = () => {
    this.setState((state) => {
      return { important: !state.important };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label " onClick={this.onClickLabel}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onClickButton}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}