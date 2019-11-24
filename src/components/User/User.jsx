import React from "react";

import "./User.scss";
import userPhoto from "./user-photo.png";

export const User  = () => (
    <a href="#" className="User">
        <figure className="User-PhotoWrapper">
            <img src={userPhoto} alt="user photo" className="User-Photo" />
        </figure>
        <span className="User-Name">ihor.romaniuk</span>
    </a>
);
