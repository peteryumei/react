import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSuccess(authors)
{
  return {type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

export function loadAuthors() {
  //debugger
  return function(dispatch) {
    return authorApi.getAuthors()
    .then(courses => {
      dispatch(loadAuthorSuccess(courses));
    })
    .catch(error => {
      throw error;
    });
  };
}