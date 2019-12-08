import {  IS_LOADING, LOADING_FAIL, SET_MOVIES, SET_SESSION } from "../constants";

const INITIAL_VALUE = {
    isLoading: false
};

export const loading = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case IS_LOADING:
            return ({
                ...state,
                isLoading: true
            });

        case SET_MOVIES:
        case LOADING_FAIL:
        case SET_SESSION:
            return ({
                ...state,
                isLoading: false
            });

        default:
            return state;
    }
};

