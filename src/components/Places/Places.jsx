import React from "react";

import "./Place.scss";
import { PlaceRow } from "..";

export const Places = ({ space, handleChosePlace }) => {
    return (
        <div className="Places">
            <div className="Places-Front">
                <span>Экран</span>
            </div>
            {space.map((item, i) => {
                return <PlaceRow
                    key={i}
                    index={i}
                    seats={item}
                    handleChosePlace={handleChosePlace}
                />
            })}
        </div>
    )
};
