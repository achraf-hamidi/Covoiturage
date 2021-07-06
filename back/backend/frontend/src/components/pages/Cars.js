import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCars, deleteCar } from "../../actions/cars";

export class Cars extends Component {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    getCars: PropTypes.func.isRequired,
    deleteCar: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCars();
  }

  render() {
    return (
      <Fragment>
        <h2>Cars</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>name</th>
              <th>Size</th>
              <th>Availble sites</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cars.map((car) => (
              <tr key={car.id}>
                <td>{car.car_name}</td>
                <td>{car.car_size}</td>
                <td>{car.car_sites}</td>
                <td>{car.car_description}</td>
                <td>
                  <button
                    onClick={this.props.deleteCar.bind(this, car.id)}
                    className="btn btn-danger btn-lg"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
});

const mapDispatchToProps = {
  getCars,
  deleteCar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cars);
