import React from "react";

import "./Logo.scss";
import logo from "./logo.png";

export const Logo = () => (
    <a href="/" className="Logo-Link">
        <img src={logo} alt="cinema logo" className="Logo-Img" />
    </a>
);
