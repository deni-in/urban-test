const initialState = {
  login: "",
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "login/set": {
      return {
        ...state,
        login: action.payload,
      };
    }
    default:
      return state;
  }
};

export default login;

export const setStateLogin = (login) => {
  return (dispatch) => {
    dispatch({ type: "login/set", payload: login });
  };
};

export const selectLogin = (state) => state.login.login;
