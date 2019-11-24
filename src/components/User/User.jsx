import React from "react";

import "./User.scss";
import userPhoto from "./user-photo.jpg";

export const User  = () => (
    <a href="/" className="User">
        <figure className="User-PhotoWrapper">
            <img src={userPhoto} alt="user avatar" className="User-Photo" />
        </figure>
        <span className="User-Name">ihor.romaniuk</span>
    </a>
);
