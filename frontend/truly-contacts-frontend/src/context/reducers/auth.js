import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCESS,
} from "../../constants/actionTypes";

const auth = (state, { payload, type }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };

    case REGISTER_SUCESS:
    case LOGIN_SUCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload,
        },
      };

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default auth;
