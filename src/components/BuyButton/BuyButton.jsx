import React from "react";

import "./BuyButton.scss";

export const BuyButton = ({ handleClickBuy, additionalClass="", text="Заказать билет", disabled=false }) => (
    <button
        className={`BuyButton ${additionalClass}`}
        onClick={handleClickBuy}
        disabled={disabled}
    >
        {text}
    </button>
);
