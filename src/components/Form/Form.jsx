import React, { useState } from "react";

import { BuyButton } from "..";
import "./Form.scss";

export const Form = ({ handleSubmitForm }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleChangeName = (e) => {
        setName(e.target.value)
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleClickBuy = (e) => {
        e.preventDefault();
        handleSubmitForm({ name, email });
    };

    return (
        <form className="Form">
            <div className="Form-Row">
                <label className="Form-Label">Имя:</label>
                <input
                    className="Form-Field"
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                />
            </div>
            <div className="Form-Row">
                <label className="Form-Label">Email:</label>
                <input
                    className="Form-Field"
                    type="mail"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </div>
            <BuyButton
                disabled={!name && !email}
                text="Купить"
                handleClickBuy={handleClickBuy}
            />
        </form>
    )
};
