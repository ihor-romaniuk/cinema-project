import React from "react";

import "./PlacesWidget.scss";
import { BuyButton, Form, Places } from "..";

export const PlacesWidget = ({
    session,
    space,
    handleChosePlace,
    chosenPlace,
    showForm,
    handleClickBuy,
    handleOpenForm
}) => (
    <React.Fragment>
        <h2 className="Modal-Title">{session.movies.title} </h2>
        <div className="Modal-ShortInfo">
            <span>Зал: {session.room === "yellow" ? "жёлтый" : "зеленый"}</span>
            <span>Время: {new Date(session.date).toLocaleTimeString().slice(0, -3)}</span>
        </div>
        <Places space={space} handleChosePlace={handleChosePlace}/>
        {chosenPlace && (
            <div className="Modal-ChosenInfo">
                <span><b>ряд:</b> {chosenPlace.row}</span>
                <span><b>место:</b> {chosenPlace.place}</span>
                {
                    showForm
                        ? <Form handleSubmitForm={handleClickBuy}/>
                        : <BuyButton handleClickBuy={handleOpenForm} text="Оформить билет"/>
                }
            </div>
        )
        }
    </React.Fragment>
);
