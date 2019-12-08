import React from "react";

import "./ModalContent.scss";
import { PlacesWidget } from "..";

export const ModalContent = ({
    session,
    user,
    chosenPlace,
    space,
    showForm,
    handleCLoseModal,
    handleChosePlace,
    handleClickBuy,
    handleOpenForm
}) => {
    return (
        <div>
            <span className="Modal-Close" onClick={handleCLoseModal}>x</span>
            {
                user
                    ? (
                        <div>
                            <h3>{user.name} спасибо за покупку</h3>
                            <p>
                                ваш билет на <b>ряд: {chosenPlace.row} место: {chosenPlace.place}</b>&nbsp;
                                и были высланы на указанный e-mail <b>{user.email}</b>
                            </p>
                        </div>
                    )
                    : <PlacesWidget
                        session={session}
                        space={space}
                        handleChosePlace={handleChosePlace}
                        chosenPlace={chosenPlace}
                        showForm={showForm}
                        handleClickBuy={handleClickBuy}
                        handleOpenForm={handleOpenForm}
                    />
            }
        </div>
    );
};
