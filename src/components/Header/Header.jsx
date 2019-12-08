import React from  "react";

import { Logo, Nav, User } from "..";
import "./Header.scss";

export const Header = () => {
    return (
        <header className="Header">
            <div className="Container">
                <Logo/>
                <Nav/>
                <User/>
            </div>
        </header>
    )
};
