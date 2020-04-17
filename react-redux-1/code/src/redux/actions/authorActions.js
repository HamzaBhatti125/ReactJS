import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import * as authorApi from "../../api/authorApi";

export function loadauthorsSuccess(authors) {
    return { type: LOAD_AUTHORS_SUCCESS, authors };
  }
  
  export function loadAuthors() {
    return function(dispatch) {
      return authorApi
      .getAuthors()
        .then(authors => {
          dispatch(loadauthorsSuccess(authors));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  