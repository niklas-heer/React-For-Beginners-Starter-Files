import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  handleChange = event => {
    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          value={this.props.fish.name}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="price"
          value={this.props.fish.price}
        />
        <select
          type="text"
          onChange={this.handleChange}
          name="status"
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name="desc"
          value={this.props.fish.desc}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="image"
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}
