import react, { Component } from 'react';

import './AddItem.css';

export default class AddItem extends Component {
  render() {
    return (
      <div className="add-item">
        <input id="input-text" />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.addItemFunc('Hello World!')}
        >
          Add new Tasks
        </button>
      </div>
    );
  }
}
