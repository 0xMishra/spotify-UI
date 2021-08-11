import { useSelector } from "react-redux";

export const onLoginPasswordChange = (e) => {
  return {
    type: "onLoginPasswordChange",
    payload: e.target.value,
  };
};

export const onLoginUsernameChange = (e) => {
  return {
    type: "onLoginUsernameChange",
    payload: e.target.value,
  };
};

export const onSignupEmailChange = (e) => {
  return {
    type: "onSignupEmailChange",
    payload: e.target.value,
  };
};
export const onSignupConfirmEmailChange = (e) => {
  return {
    type: "onSignupConfirmEmailChange",
    payload: e.target.value,
  };
};
export const onSignupPasswordChange = (e) => {
  return {
    type: "onSignupPasswordChange",
    payload: e.target.value,
  };
};
export const onSignupUsernameChange = (e) => {
  return {
    type: "onSignupUsernameChange",
    payload: e.target.value,
  };
};
