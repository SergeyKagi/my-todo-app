import react, { Component } from 'react';

import './AddItem.css';

export default class AddItem extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItemFunc(this.state.label);
  };
  render() {
    return (
      <form className="add-item d-flex" onSubmit={this.onSubmit}>
        <input
          id="input-text"
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Tap here your next Task!"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add new Tasks
        </button>
      </form>
    );
  }
}
