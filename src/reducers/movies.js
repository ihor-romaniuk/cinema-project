import {  SET_MOVIES } from "../constants";

const INITIAL_VALUE = {
    movies: []
};

export const movies = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case SET_MOVIES :
            return ({
                ...state,
                movies: action.payload
            });

        default:
            return state;
    }
};

