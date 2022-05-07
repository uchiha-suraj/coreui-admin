import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user ...
    const data = await api.signIn(formData);
    const token = data.headers["x-token"];
    const refreshToken = data.headers["x-refresh-token"];
    // console.log("sign in data", data, token, refreshToken);

    dispatch({
      type: AUTH,
      data: {
        ...data.data,
        token: data.headers["x-token"],
        refreshToken: data.headers["x-refresh-token"]
      }
    });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // sign up the user ...
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
