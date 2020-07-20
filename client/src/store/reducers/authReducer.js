import * as actionTypes from "../actions/actionTypes";
const initialstate = {
  auth: "",
};
const authReducer = (state = initialstate, action) => {
  console.log("action", action);
  switch (action.type) {
    case actionTypes.FETCH_USER: {
      console.log("payload in reducer", action.payload);
      return {
        auth: action.payload.data ? action.payload : false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
