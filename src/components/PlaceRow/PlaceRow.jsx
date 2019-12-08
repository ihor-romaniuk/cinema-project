import React from "react";

import "./PlaceRow.scss";

export const PlaceRow = ({ seats, index, handleChosePlace }) => (
    <div className="Places-Row" data-row={index + 1}>
        {
            seats.map((elem, n) => {
                return (
                    <div
                        key={`$(index}-${n}`}
                        className={`Places-Item ${elem.booked ? "Places-Item_booked" : "" }`}
                        onClick={() => handleChosePlace(elem)}
                    >
                        <span>{elem.place}</span>
                    </div>
                )
            })
        }
    </div>
);
