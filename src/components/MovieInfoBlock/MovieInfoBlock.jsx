import React from "react";

import "./MovieInfoBlock.scss";

export const MovieInfoBlock = ({ title, text }) => (
    <div className="MovieItem-Row">
        <span className="MovieItem-Label">{title}:</span>
        <span className="MovieInfo-Value">{text ? text : "-"}</span>
    </div>
);
