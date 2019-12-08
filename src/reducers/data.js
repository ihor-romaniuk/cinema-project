import { SET_MOVIES, SET_ROOMS, SET_SESSION } from "../constants";

const INITIAL_VALUE = {
    movies: [],
    genres: [],
    rooms: [],
    sessions: [],
};

export const data = (state = INITIAL_VALUE, action) => {
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

        case SET_SESSION:
            const sortedArr = action.payload.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) return 1;
                if (new Date(a.date) < new Date(b.date)) return -1;

                return 0;
            });

            const sessionsArr  = sortedArr.reduce((acc, item) => {
                if (!acc.length) {
                    acc.push([])
                }

                const lastElem = acc[acc.length-1];
                const lastElemDate = lastElem.length ? lastElem[0].date.split("T")[0] : null;
                const itemDate = item.date.split("T")[0];
                const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

                if (lastElem.length && differentDates) {
                    return [...acc, [item]]
                }

                acc[acc.length-1].push(item);

                return acc;
            }, []);

            return ({
                ...state,
                sessions: sessionsArr
            });

        case SET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };

        default:
            return state;
    }
};

