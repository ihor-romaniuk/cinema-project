import axios from "axios";

import { URL_MOVIES, SET_MOVIES, IS_LOADING, LOADING_FAIL } from "../constants";

export const isLoading = ()=> ({ type: IS_LOADING });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
export const loadingFail = (error) => ({ type: LOADING_FAIL });

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading());
        axios.get(URL_MOVIES)
            .then(({ data })  => dispatch(setMovies(data.movie)))
            .catch(error => dispatch(loadingFail(error)))
    }
};
