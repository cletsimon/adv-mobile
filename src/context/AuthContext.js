import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we signup, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect an error message somewhere
    try {
      const response = await trackerApi.post("/signup", { email, password });
      //console.log(response.data);
    } catch (err) {
      //console.log(err.response.data);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up"
      });
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // try to signin
    // handle success by updating state
    // handle failure by showing error message somehow
  };
};

const signout = dispatch => {
  return () => {
    // somehow sign out!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
