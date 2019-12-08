import React from "react";

import { BuyButton, Poster } from "..";
import "./MovieSession.scss";

export const MovieSession = ({ session }) => {
    const sessionDate = session.date ? new Date(session.date).toLocaleTimeString().slice(0, -3) : '';
    const roomRu = session.room === "yellow" ? "желтый" : "зеленый";

    return (
        <div className="MovieSession">
            <Poster poster={session.movies.poster} title={session.movies.title} additionalClass="MoviePoster-Wrapper_small" showBuyBtn={Boolean(false)}/>
            <div className="MovieSession-Info">
                <BuyButton additionalClass="BuyButton_right" />
                <div className="MovieSession-Title">{session.movies.title}</div>
                <div className="MovieSession-Room"><b>Зал:</b>
                    <span className={`MovieSession-RoomLabel MovieSession-RoomLabel_${session.room}`}>{roomRu}</span>
                </div>
                <div className="MovieSession-Date"><b>Время:</b> {sessionDate}</div>
                <div className="MovieSession-Description">{session.movies.description}</div>
            </div>
        </div>
    )
};
