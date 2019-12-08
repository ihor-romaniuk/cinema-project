import React from "react";
import { Link } from "react-router-dom";

import "./User.scss";
import userPhoto from "./user-photo.jpg";

export const User = () => (
    <Link to="/" className="User">
        <figure className="User-PhotoWrapper">
            <img src={userPhoto} alt="user" className="User-Photo" />
        </figure>
        <span className="User-Name">ihor.romaniuk</span>
    </Link>
);
