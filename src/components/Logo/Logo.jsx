import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";
import logo from "./logo.png";

export const Logo = () => (
    <Link to="/" className="Logo-Link">
        <img src={logo} alt="[R]cinema" className="Logo-Img" />
    </Link>
);
