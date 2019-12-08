import React from "react";
import ReactDOM from "react-dom";

import { ModalWrapper } from "..";

export class ModalBuyTicker extends React.Component {
    root = document.createElement("div");
    body = document.querySelector("body");

    componentDidMount() {
        this.body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const { session, handleCLoseModal } = this.props;

        return ReactDOM.createPortal(
            <ModalWrapper session={session} handleCLoseModal={handleCLoseModal} />,
            this.root
        )
    }
}
