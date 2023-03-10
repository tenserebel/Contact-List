import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const register =
  ({ email, password, username, lastName: last_name, firstName: first_name }) =>
  (dispatch) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance()
      .post("/auth/register", {
        email,
        password,
        username,
        last_name,
        first_name,
      })
      .then((res) => {
        dispatch({
          type: REGISTER_SUCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_ERROR,
          payload: err.response ? err.response.data : "coundn't connect",
        });
      });
  };
