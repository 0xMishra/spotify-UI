import { combineReducers, createStore } from "redux";

const loginReducer = (
  state = {
    username: "",
    password: "",
  },
  action
) => {
  if (action.type === "onLoginPasswordChange") {
    return { ...state, password: action.payload };
  }
  if (action.type === "onLoginUsernameChange") {
    return { ...state, username: action.payload };
  }

  return state;
};
const signupReducer = (
  state = {
    email: "",
    password: "",
    confirmEmail: "",
    username: "",
  },
  action
) => {
  if (action.type === "onSignupEmailChange") {
    return { ...state, email: action.payload };
  }
  if (action.type === "onSignupUsernameChange") {
    return { ...state, username: action.payload };
  }
  if (action.type === "onSignupPasswordChange") {
    return { ...state, password: action.payload };
  }
  if (action.type === "onSignupConfirmEmailChange") {
    return { ...state, confirmEmail: action.payload };
  }

  return state;
};

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
