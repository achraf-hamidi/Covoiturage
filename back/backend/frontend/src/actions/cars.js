import axios from "axios";
import { GET_CARS, DELETE_CAR, ADD_CAR } from "./types";

export const getCars = () => (dispatch) => {
  axios
    .get("/api/Cars/")
    .then((res) => {
      dispatch({
        type: GET_CARS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteCar = (id) => (dispatch) => {
  axios
    .delete(`/api/Cars/${id}/`)
    .then((res) => {
      // dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({
        type: DELETE_CAR,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addCar = (car) => (dispatch) => {
  axios
    .post(`/api/Cars/`, car)
    .then((res) => {
      // dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({
        type: ADD_CAR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
