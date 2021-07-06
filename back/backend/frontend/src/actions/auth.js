import axios from "axios";
import { USER_LOADED_SUCCESS, USER_LOADED_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/auth/users/me/",
        config
      );

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/auth/jwt/create/",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    //console.log(err);
  }
};

// export const signup =
//   (first_name, last_name, email, password, re_password) => async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify({
//       first_name,
//       last_name,
//       email,
//       password,
//       re_password,
//     });

//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API_URL}/auth/users/`,
//         body,
//         config
//       );

//       dispatch({
//         type: SIGNUP_SUCCESS,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: SIGNUP_FAIL,
//       });
//     }
//   };

// export const verify = (uid, token) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ uid, token });

//   try {
//     await axios.post(
//       `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
//       body,
//       config
//     );

//     dispatch({
//       type: ACTIVATION_SUCCESS,
//     });
//   } catch (err) {
//     dispatch({
//       type: ACTIVATION_FAIL,
//     });
//   }
// };

// export const logout = () => (dispatch) => {
//   dispatch({
//     type: LOGOUT,
//   });
// };
