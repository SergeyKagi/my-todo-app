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
    this.setState({
      label: ' ',
    });
  };
  render() {
    return (
      <form className="add-item d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Tap here your next Task!"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add new Tasks</button>
      </form>
    );
  }
}
