import React from "react";

import "./SessionBlock.scss";

export const SessionsBlock = ({ moviesOnDate }) => (
    <div className="Schedule-List">
        {moviesOnDate.map(elem => (
            <div key={elem._id} className="Schedule-Item">
                <div>Фильмы: {elem._id}</div>
            </div>
        ))}
    </div>
);
