import React from "react";

import "./BuyButton.scss";

export const BuyButton = ({ additionalClass = ""}) => <button className={`BuyButton ${additionalClass}`}>Заказать билет</button>;
