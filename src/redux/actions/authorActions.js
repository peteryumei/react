import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  //debugger
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((courses) => {
        dispatch(loadAuthorSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
