import {  SET_MOVIES } from "../constants";

const INITIAL_VALUE = {
    movies: [],
    genres: [],
};

export const movies = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case SET_MOVIES :
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach(genreItem => {
                        if (!acc.includes(genreItem.trim()) && genreItem.length) {
                                acc.push(genreItem.trim())
                        }
                    })
                }

                return acc;
            }, []);

            return ({
                ...state,
                movies: action.payload,
                genres: genres
            });

        default:
            return state;
    }
};

