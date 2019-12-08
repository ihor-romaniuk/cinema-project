import axios from "axios";

import { URL_SESSIONS, SET_SESSION, URL_ROOMS, SET_ROOMS } from "../constants";
import { loadingFail } from "./general";

export const setSessions = (sessions) => ({ type: SET_SESSION, payload: sessions });
export const setRooms = (sessions) => ({ type: SET_ROOMS, payload: sessions });

export const getSessions = () => {
    return dispatch => {
        Promise.all([axios.get(URL_SESSIONS), axios.get(URL_ROOMS)])
            .then(([sessions, rooms])  => {
                dispatch(setSessions(sessions.data.session));
                dispatch(setRooms(rooms.data.rooms));
            })
            .catch(error => dispatch(loadingFail(error)))
    }
};
