import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCar } from "../../actions/cars";

export class Form extends Component {
  state = {
    name: "",
    desc: "",
    size: 0,
    sites: 0,
    user_id: 0,
  };

  static propTypes = {
    addCar: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    console.log("enter form");
    e.preventDefault();
    const { name, desc, size, sites, user_id } = this.state;
    const car = { name, desc, size, sites, user_id };
    this.props.addCar(car);
    this.setState({
      name: "",
      desc: "",
      size: 0,
      sites: 0,
      user_id: 0,
    });
  };
  render() {
    const { name, desc, size, sites, user_id } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Cars</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Car description</label>
            <textarea
              className="form-control"
              type="text"
              name="desc"
              onChange={this.onChange}
              value={desc}
            />
          </div>
          <div className="form-group">
            <label>Car size</label>
            <input
              className="form-control"
              type="number"
              name="size"
              onChange={this.onChange}
              value={size}
            />
          </div>
          <div className="form-group">
            <label>Car sites</label>
            <input
              className="form-control"
              type="number"
              name="sites"
              onChange={this.onChange}
              value={sites}
            />
          </div>
          <input
            type="hidden"
            name="user_id"
            value={user_id}
            onChange={() => this.setState({ user_id: car.user_id })}
          />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCar })(Form);
