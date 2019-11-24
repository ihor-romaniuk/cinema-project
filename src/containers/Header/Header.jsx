import React from  "react";

import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { User } from "../../components/User/User";
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
