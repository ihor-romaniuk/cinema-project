import React from "react";

import { MovieSession } from "..";
import "./SessionBlock.scss";

export const SessionsBlock = ({ moviesOnDate }) => {
    return moviesOnDate
        .filter(item => item.movies)
        .map(elem => <MovieSession key={elem._id} session={elem} />)
};
