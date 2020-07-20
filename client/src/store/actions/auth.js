import axios from "axios";
import * as actionTypes from "./actionTypes";
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res,
  });
};

export const handleToken = (token) => async (dispatch) => {
  console.log("stripe");
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res,
    //can send res.data as stephen does
  });
};
